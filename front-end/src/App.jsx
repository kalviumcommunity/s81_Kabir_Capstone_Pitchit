

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Explore from './pages/Explore';
import Community from './pages/Community';
import Signup from './pages/Signup'; 
import Login from './pages/Login';   
import Profile from './pages/Profile'; 
import Pitch from './pages/Pitch'; // Make sure the path and filename match

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/communities" element={<Community />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pitch" element={<Pitch />} /> {/* Route to pitch form */}
      </Routes>
    </Router>
  );
};

export default App;
