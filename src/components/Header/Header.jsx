import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Header.css';
import SmoothLink from '../SmoothLink/SmoothLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <SmoothLink to="#home">MiPortfolio</SmoothLink>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li><SmoothLink to="#home" onClick={handleNavClick}>Inicio</SmoothLink></li>
              <li><SmoothLink to="#about" onClick={handleNavClick}>Sobre mí</SmoothLink></li>
              <li><SmoothLink to="#skills" onClick={handleNavClick}>Habilidades</SmoothLink></li>
              <li><SmoothLink to="#projects" onClick={handleNavClick}>Proyectos</SmoothLink></li>
              <li><SmoothLink to="#contact" onClick={handleNavClick}>Contacto</SmoothLink></li>
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