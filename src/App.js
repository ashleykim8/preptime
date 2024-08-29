import Navbar from './pages/Navbar';
import React, {useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Flashcards from './pages/Flashcards';
import ReviewFlashcards from './pages/ReviewFlashcards';
import FlashcardSet from './pages/FlashcardSets';
import AccountSettings from './pages/AccountSettings';
import UserButton from './objects/UserButton';

function App(){
  const [flashcardSets, setFlashcardSets] = useState([]);
  return (
  <Router>
    <Navbar />
    <UserButton /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<AccountSettings />} />
      <Route path="/flashcards" element={<Flashcards flashcards={flashcards} setFlashcards={setFlashcards} />} />
      <Route path="/review-flashcards" element={<ReviewFlashcards flashcards={flashcards} />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);
}

export default App;