import { useState } from "react";

// AOS - Animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import WorkProcess from "./components/WorkProcess";
import OurTeam from "./components/OurTeam";
import ClientTestimonials from "./components/ClientTestimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="motion-preset-fade">
        <Navbar />
        <Hero />
        <Banner />
        <About />
        <Services />
        <WorkProcess />
        <OurTeam />
        <ClientTestimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
