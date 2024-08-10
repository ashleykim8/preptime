import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewFlashcards.css';

function ReviewFlashcards({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleBackToFlashcards = () => {
    navigate('/flashcards');
  };

  return (
    <div className="review-flashcards-container">
      <h2>Review Flashcards</h2>
      
      {flashcards.length > 0 ? (
        <>
          <div className="review-flashcard" onClick={handleFlip}>
            <div
              className={`review-flashcard-inner ${isFlipped ? 'flipped' : ''}`}
            >
              <div className="review-flashcard-front">
                {flashcards[currentIndex].question}
              </div>
              <div className="review-flashcard-back">
                {flashcards[currentIndex].answer}
              </div>
            </div>
          </div>
          <div className="navigation-buttons">
            <button 
              onClick={handlePrevious} 
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button 
              onClick={handleNext} 
              disabled={currentIndex === flashcards.length - 1}
            >
              Next
            </button>
          </div>
          {currentIndex === flashcards.length - 1 && (
            <div className="completion-message">
              You have finished this flashcard set!
            </div>
          )}
          <div className="action-buttons">
            <button onClick={handleBackToFlashcards} className="back-button">
              Back to Flashcards
            </button>
          </div>
        </>
      ) : (
        <div className="no-flashcards">
          <p>No flashcards to review.</p>
          <button onClick={handleBackToFlashcards} className="back-button">
            Back to Flashcards
          </button>
        </div>
      )}
    </div>
  );
}

export default ReviewFlashcards;
