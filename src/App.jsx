import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import VideoHeader from "./components/VideoHeader";
import AboutUs from "./components/AboutUs";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <VideoHeader />
      <AboutUs />
      <Services />
      <MissionVision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
