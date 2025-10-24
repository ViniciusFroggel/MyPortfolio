import './assets/css/style.css';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${theme === 'light' ? 'light-theme' : ''}`}>
      <div className="logo">Vinicius</div>

      {/* Menu Desktop */}
      <nav>
        <ul className="nav-links">
          <li><a href="#home" onClick={handleNavLinkClick}>Início</a></li>
          <li><a href="#sobre" onClick={handleNavLinkClick}>Sobre</a></li>
          <li><a href="#projetos" onClick={handleNavLinkClick}>Projetos</a></li>
          <li><a href="#contato" className="contact-btn" onClick={handleNavLinkClick}>Entre em Contato</a></li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? '🌞' : '🌑'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : '☰'}
      </div>

      {menuOpen && (
        <ul className="mobile-menu">
          <li><a href="#home" onClick={handleNavLinkClick}>Início</a></li>
          <li><a href="#sobre" onClick={handleNavLinkClick}>Sobre</a></li>
          <li><a href="#projetos" onClick={handleNavLinkClick}>Projetos</a></li>
          <li><a href="#contato" className="contact-btn" onClick={handleNavLinkClick}>Entre em Contato</a></li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
