import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AOS from 'aos'; // Importa AOS

function App() {
  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
    });
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <>
      {/* Navbar agora receberá toggleTheme e currentTheme via Context */}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
