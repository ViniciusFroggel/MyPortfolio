import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa os estilos do AOS

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
      <Footer />
    </>
  );
}

export default App;
