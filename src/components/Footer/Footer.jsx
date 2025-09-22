import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="#">MiPortfolio</a>
            <p>Creando experiencias digitales excepcionales</p>
          </motion.div>
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </motion.div>
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Sígueme</h4>
            <div className="social-icons">
              <a href="https://github.com/NahuelManenti"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/nahuel-manenti-08912a1ba/"><i className="fab fa-linkedin"></i></a>
            </div>
          </motion.div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} MiPortfolio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;