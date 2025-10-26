import { useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import WorkProcess from "./components/WorkProcess";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Banner />
        <About />
        <Services />
        <WorkProcess />
      </div>
    </>
  );
}

export default App;
