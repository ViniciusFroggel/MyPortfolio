import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Cria o Contexto
export const ThemeContext = createContext();

// 2. Cria o Provedor do Contexto
export const ThemeProvider = ({ children }) => {
  // Tenta carregar o tema do localStorage ou define 'dark' como padrão
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  });

  // Efeito para aplicar a classe 'light-theme' ao body e salvar no localStorage
  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // O valor que será fornecido a todos os componentes filhos
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook customizado para facilitar o uso do contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
