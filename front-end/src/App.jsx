// // // App.jsx

// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Navbar from "./components/Navbar";  // Adjust the path if needed
// // import Home from "./pages/Home";          // Adjust the path if needed
// // // import Explore from "./pages/Explore";    // Adjust the path if needed
// // import Community from "./pages/Community"; // Adjust the path if needed

// // const App = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         {/* <Route path="/explore" element={<Explore />} /> */}
// //         <Route path="/communities" element={<Community />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;













// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar'; // Update path if necessary
// import Home from './pages/Home';
// import Explore from './pages/explore';
// import Communities from './pages/Community';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/explore" component={Explore} />
//         <Route path="/communities" component={Communities} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;











import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './components/Navbar'; // Update path if necessary
import Home from './pages/Home';
import Explore from './pages/explore';
import Community from './pages/Community'; // Use the correct path here for the Community page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/communities" element={<Community />} /> {/* Updated route to use Community */}
      </Routes>
    </Router>
  );
};

export default App;
