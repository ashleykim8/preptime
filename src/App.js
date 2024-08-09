import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register'
import AccountSettings from './pages/AccountSettings';
import UserButton from './objects/UserButton';

function App(){
  return (
  <Router>
    <Navbar />
    <UserButton /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<AccountSettings />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);
}

export default App;