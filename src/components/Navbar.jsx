import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Importa o hook useTheme

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Usa o hook para acessar o tema e a função de alternar

  const handleNavLinkClick = () => {
    setMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <header className="navbar">
      {/* Corrigido: texto literal no lugar de <Vinicius/> */}
      <div className="logo">Vinicius</div>
      
      <nav>
        <ul className={menuOpen ? 'active' : ''}>
          <li>
            <a href="#home" className="active" onClick={handleNavLinkClick}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={handleNavLinkClick}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={handleNavLinkClick}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" className="contact-btn" onClick={handleNavLinkClick}>
              Entre em Contato
            </a>
          </li>
        </ul>
      </nav>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌞' : '🌑'}
      </div>  
     
    </header>
  );
};

export default Navbar;
