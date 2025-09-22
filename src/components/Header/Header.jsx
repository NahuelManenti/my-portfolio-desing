import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#">MiPortfolio</a>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
            >
              {isDarkMode ? (
                <i className="fas fa-sun"></i> // Icono de sol para modo claro
              ) : (
                <i className="fas fa-moon"></i> // Icono de luna para modo oscuro
              )}
            </button>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;