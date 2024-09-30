import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './Flashcards.css';

function Flashcards({ flashcardSets, setFlashcardSets }) {
  const navigate = useNavigate();
  const { setId } = useParams();
  const currentSet = flashcardSets.find((set) => set.id === parseInt(setId));

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const addFlashcard = () => {
    if (question && answer) {
      const newFlashcard = { id: Date.now(), question: question, answer: answer };
      const updatedSet = { ...currentSet, flashcards: [...currentSet.flashcards, newFlashcard] };
      setFlashcardSets(flashcardSets.map((set) => (set.id === currentSet.id ? updatedSet : set)));
      setQuestion('');
      setAnswer('');
    }
  };

  const deleteFlashcard = (id) => {
    const updatedSet = {
      ...currentSet,
      flashcards: currentSet.flashcards.filter((flashcard) => flashcard.id !== id),
    };
    setFlashcardSets(flashcardSets.map((set) => (set.id === currentSet.id ? updatedSet : set)));
  };

  async function submitSet() {
    await fetch(
      'http://localhost:5000/api/flashcards/register', {
          method: "POST",
          body: JSON.stringify({ 
            definitions:currentSet.flashcards,
            name:currentSet.name
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      console.log(currentSet)
      navigate(`/reviewflashcards/${currentSet.id}`);
  }

  if (!currentSet) {
    return <div>Set not found</div>;
  }

  return (
    <div className="flashcards-container">
      <h2>Manage Flashcards for {currentSet.name}</h2>

      <div className="add-flashcard">
        <input
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={addFlashcard}>Add Flashcard</button>
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
              <button onClick={() => deleteFlashcard(flashcard.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="submit-set">
        <button onClick={submitSet}>Submit Set</button>
      </div>
      <Link to="/flashcardsets" className="backtosetslink">Back to Sets</Link>
    </div>
  );
}

export default Flashcards;
