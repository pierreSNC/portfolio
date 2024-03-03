import './App.css';
import Hero from "./components/organsims/Hero/Hero";
import Image from "./components/atoms/Image/Image";
import React from "react";
import Header from "./components/molecules/Header/Header";
import Skills from "./pages/Skills/Skills";
import Experiences from "./pages/Experiences/Experiences";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
        <Hero />
        <Skills />
        <Experiences />
        <Contact />
    </div>
  );
}

export default App;
