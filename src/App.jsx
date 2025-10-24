import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'; // <-- Adicionamos o componente aqui
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Animações AOS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact /> {/* <-- Nova seção de contato */}
      <Footer />
    </>
  );
}

export default App;
