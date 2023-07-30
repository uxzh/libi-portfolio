import "./App.css";
import React from "react";
import Main from "./Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main id="Main" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:projectUrl" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
