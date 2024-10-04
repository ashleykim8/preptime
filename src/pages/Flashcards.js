import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './Flashcards.css';

function Flashcards({ flashcardSets, setFlashcardSets }) {
  const navigate = useNavigate();
  const { setId } = useParams();
  const currentSet = flashcardSets.find((set) => set.id === parseInt(setId));

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editingFlashcardId, setEditingFlashcardId] = useState(null);

  const addOrEditFlashcard = () => {
    if (!question || !answer) return;
    
    if (editMode) {
      const updatedFlashcards = currentSet.flashcards.map((flashcard) => 
        flashcard.id === editingFlashcardId ? { ...flashcard, question, answer } : flashcard
      );
      const updatedSet = { ...currentSet, flashcards: updatedFlashcards };
      setFlashcardSets(flashcardSets.map((set) => (set.id === currentSet.id ? updatedSet : set)));

      setEditMode(false);
      setEditingFlashcardId(null);
    } else {
      const newFlashcard = { id: Date.now(), question: question, answer: answer };
      const updatedSet = { ...currentSet, flashcards: [...currentSet.flashcards, newFlashcard] };
      setFlashcardSets(flashcardSets.map((set) => (set.id === currentSet.id ? updatedSet : set)));
    }

    setQuestion('');
    setAnswer('');
  };

  const deleteFlashcard = (id) => {
    const updatedSet = {
      ...currentSet,
      flashcards: currentSet.flashcards.filter((flashcard) => flashcard.id !== id),
    };
    setFlashcardSets(flashcardSets.map((set) => (set.id === currentSet.id ? updatedSet : set)));
  };

  const editFlashcard = (flashcard) => {
    setQuestion(flashcard.question);
    setAnswer(flashcard.answer);
    setEditMode(true);
    setEditingFlashcardId(flashcard.id);
  }

  async function submitSet() {
    await fetch(
      'http://localhost:8080/api/flashcards/register', {
          method: "POST",
          body: JSON.stringify({ 
            definitions:currentSet.flashcards,
            name:currentSet.name
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      navigate(`/reviewflashcards/${currentSet.id}`);
  }

  if (!currentSet) {
    return <div>Set not found</div>;
  }

  return (
    <div className="flashcards-container">
      <h2>Edit Flashcards for Set {currentSet.name}</h2>

      <div className="add-flashcard">
        <input
          type="text"
          placeholder="Enter term"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter definition"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="input-field"
        />
        <button onClick={addOrEditFlashcard} className="add-button">
          {editMode ? 'Update Flashcard' : 'Add Flashcard'}
        </button>
      </div>

      <div className="flashcard-list">
        {currentSet.flashcards.map((flashcard) => (
          <div key={flashcard.id} className="flashcard">
            <div className="flashcard-inner">
              <div className="flashcard-front">
                <span>{flashcard.question}</span>
              </div>
              <div className="flashcard-back">
                <span>{flashcard.answer}</span>
              </div>
            </div>
            <div className="flashcard-actions">
              <button onClick={() => editFlashcard(flashcard)} className="edit-button">Edit</button>
              <button onClick={() => deleteFlashcard(flashcard.id)} className="delete-button">Delete</button>
             </div>
          </div>
        ))}
      </div>
      <div className="submit-set">
        <button onClick={submitSet} className="submit-button" >Submit Set</button>
      </div>
      <Link to="/flashcardsets" className="backtosets-link">Back to Sets</Link>
    </div>
  );
}

export default Flashcards;
