import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FlashcardSets.css';

function FlashcardSets({ flashcardSets, setFlashcardSets }) {
    const [setName, setSetName] = useState('')

    const addSet = () => {
        if (setName) {
            const newSet = { id: Date.now(), name: setName, flashcards: [] };
            setFlashcardSets([...flashcardSets, newSet]);
            setSetName('');
        }
    };

    return (
        <div className="flashcard-sets-container">
      <h2>Manage Flashcard Sets</h2>

      <div className="add-set">
        <input
          type="text"
          placeholder="Enter set name"
          value={setSetName}
          onChange={(e) => setSetName(e.target.value)}
        />
        <button onClick={addSet}>Add Set</button>
      </div>

      <div className="set-list">
        {flashcardSets.map((set) => (
          <div key={set.id} className="set-item">
            <Link to={`/flashcards/${set.id}`}>{set.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashcardSets;