import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes instead of Switch
import Navbar from "./componunts/Navbar";
import Home from "./componunts/Home";
import About from "./componunts/About";
import NoteState from "./context/notes/NotesState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/About" element={<About />} />{" "}
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
