import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes instead of Switch
import Navbar from "./componunts/Navbar";
import Home from "./componunts/Home";
import About from "./componunts/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<Home />} /> {/* Define your routes */}
        <Route exact path="/About" element={<About />} />{" "}
        {/* Define your routes */}
      </Routes>
    </Router>
  );
}

export default App;
