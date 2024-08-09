// UserButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserButton.css'; // Optional: for styling

const UserButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/account-settings'); // Change the path as needed
  };

  return (
    <button className="user-button" onClick={handleClick}>
      User
    </button>
  );
};

export default UserButton;