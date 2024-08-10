import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Flashcards.css';

function Flashcards({ flashcards, setFlashcards }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const addFlashcard = () => {
    if (question && answer) {
      const newFlashcard = { id: Date.now(), question, answer };
      setFlashcards([...flashcards, newFlashcard]);
      setQuestion('');
      setAnswer('');
    }
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
  };

  return (
    <div className="flashcards-container">
      <h2>Manage Flashcards</h2>

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
        {flashcards.map((flashcard) => (
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

      <Link to="/review-flashcards" className="review-link">Review Flashcards</Link>
    </div>
  );
}

export default Flashcards;
