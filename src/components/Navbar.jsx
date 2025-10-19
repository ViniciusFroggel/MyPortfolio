import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo text-xl font-bold">Vinicius</div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><a href="#home" onClick={handleNavLinkClick}>Início</a></li>
          <li><a href="#sobre" onClick={handleNavLinkClick}>Sobre</a></li>
          <li><a href="#projetos" onClick={handleNavLinkClick}>Projetos</a></li>
          <li>
            <a href="#contato" className="bg-blue-600 px-4 py-2 rounded" onClick={handleNavLinkClick}>
              Entre em Contato
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} className="ml-4 text-xl">
              {theme === 'light' ? '🌞' : '🌑'}
            </button>
          </li>
        </ul>

        {/* Botão Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-xl">
            {theme === 'light' ? '🌞' : '🌑'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FaTimes /> : '☰'}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 w-full fixed top-0 left-0 h-screen justify-center gap-8 text-lg z-40">
          <li><a href="#home" onClick={handleNavLinkClick}>Início</a></li>
          <li><a href="#sobre" onClick={handleNavLinkClick}>Sobre</a></li>
          <li><a href="#projetos" onClick={handleNavLinkClick}>Projetos</a></li>
          <li><a href="#contato" onClick={handleNavLinkClick} className="bg-blue-600 px-4 py-2 rounded">
            Entre em Contato
          </a></li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
