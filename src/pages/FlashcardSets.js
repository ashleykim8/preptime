import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FlashcardSets.css';

function FlashcardSets({ flashcardSets, setFlashcardSets }) {
  const [setName, setSetName] = useState('');
  const navigate = useNavigate();

  const addSet = () => {
      if (setName) {
          const newSet = { id: Date.now(), name: setName, flashcards: [] };
          setFlashcardSets([...flashcardSets, newSet]);
          setSetName('');
      }
  };

  const handleSetClick = (id) => {
    navigate(`/flashcards/${id}`);
  };

  return (
    <div className="flashcard-sets-container">
      <h2>Flashcard Sets</h2>
      <div className="add-set">
        <input
          type="text"
          placeholder="Enter set name"
          value={setName}
          onChange={(e) => setSetName(e.target.value)}
        />
        <button onClick={addSet}>Add Set</button>
      </div>

      <div className="set-list">
        {flashcardSets.map((set) => (
          <div 
            key={set.id} 
            className="set-item flashcard-look" 
            onClick={() => handleSetClick(set.id)}
          >
            <div className="set-name">{set.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashcardSets;