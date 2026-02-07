
import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger initial check
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FDFDFD] dark:bg-gray-950 transition-colors duration-300">
        <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <About />
        </section>

        <section id="skills" className="py-20 bg-[#F9FAFB] dark:bg-gray-950">
          <Skills />
        </section>

        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <Projects />
        </section>

        <section id="experience" className="py-20 bg-[#F9FAFB] dark:bg-gray-950">
          <Timeline />
        </section>

        <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
          <Certifications />
        </section>

        <section id="contact-section" className="py-20 bg-[#F9FAFB] dark:bg-gray-950">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default App;
