import './App.css';
import React from "react";

import Hero from "./components/organsims/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Experiences from "./pages/Experiences/Experiences";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/molecules/Footer/Footer";
import Works from "./pages/Works/Works";

function App() {
  return (
    <div className="App">
        <Hero />
        <Skills />
        <Experiences />
        <Works />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
