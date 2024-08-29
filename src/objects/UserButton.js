// UserButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserButton.css'; // Optional: for styling

function UserButton({user}) {
  let userButton = null;

  const handleClick = () => {
    navigate('/account'); // Change the path as needed
  };

  if(user.username ){
      userButton =     
      <button className="user-button" onClick={handleClick}>
      {user.username}
      </button>;
  }
  const navigate = useNavigate();


  return (
    <div>
      {userButton}
    </div>

  );
};

export default UserButton;