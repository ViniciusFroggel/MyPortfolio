import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Para resets ou estilos globais mínimos
import './assets/css/style.css'; // Importa seu CSS principal
import { ThemeProvider } from './context/ThemeContext.jsx'; // Importa o ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* Envolve o App com o ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
