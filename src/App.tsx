import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App: React.FC = () => (
  <div className="App container relative mx-auto my-10 max-w-screen-lg min-h-screen bg-black text-white">
    <Header />
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default App;
