import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Technologies from "./components/sections/Technologies";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
