import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Technology from "./components/Technology";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Marquee from "./components/Marquee";
import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.className = theme === "dark" ? "" : "light";
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  if (loading) {
    return (
      <div className="relative min-h-screen">
        <CustomCursor />
        <Preloader onComplete={() => setLoading(false)} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Services />
      <Marquee />
      <div className="section-divider" />
      <Technology />
      <BentoGrid />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </div>
  );
}
