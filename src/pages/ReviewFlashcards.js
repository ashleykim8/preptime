import React from 'react';
import { useParams } from 'react-router-dom';

function ReviewFlashcards({ flashcardSets }) {
  const { setId } = useParams();
  const currentSet = flashcardSets.find((set) => set.id === parseInt(setId));

  if (!currentSet) {
    return <div>Set not found</div>;
  }

  return (
    <div className="review-flashcards-container">
      <h2>Review Flashcards for {currentSet.name}</h2>

      {currentSet.flashcards.map((flashcard) => (
        <div key={flashcard.id} className="flashcard">
          <div className="flashcard-front">
            <span>{flashcard.question}</span>
          </div>
          <div className="flashcard-back">
            <span>{flashcard.answer}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewFlashcards;
