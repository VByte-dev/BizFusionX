import { useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Banner />
        <About />
        <Services />
      </div>
    </>
  );
}

export default App;
