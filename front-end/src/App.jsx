// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";  // Adjust the path if needed
import Home from "./pages/Home";          // Adjust the path if needed
// import Explore from "./pages/Explore";    // Adjust the path if needed
import Community from "./pages/Community"; // Adjust the path if needed

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/explore" element={<Explore />} /> */}
        <Route path="/communities" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default App;
