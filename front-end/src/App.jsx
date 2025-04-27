

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
// import Navbar from './components/Navbar'; // Update path if necessary
// import Home from './pages/Home';
// import Explore from './pages/explore';
// import Community from './pages/Community'; // Use the correct path here for the Community page

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes> {/* Use Routes instead of Switch */}
//         <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/communities" element={<Community />} /> {/* Updated route to use Community */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;






















import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Update path if needed
import Home from './pages/Home';
import Explore from './pages/Explore';
import Community from './pages/Community';
import Signup from './pages/Signup'; // Import Signup page
import Login from './pages/Login';   // Import Login page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/communities" element={<Community />} />
        <Route path="/signup" element={<Signup />} /> {/* New signup route */}
        <Route path="/login" element={<Login />} />    {/* New login route */}
      </Routes>
    </Router>
  );
};

export default App;
