import { motion } from 'framer-motion';
import './Hero.css';
import foto from '../../assets/mi-foto.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Hola, soy <span className="highlight">Nahuel Manenti</span></h1>
            <h2>Desarrollador Full Stack</h2>
            <p>Creo experiencias web increíbles con React y tecnologías modernas.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">Ver Proyectos</a>
              <a href="#contact" className="btn btn-outline">Contactarme</a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div >
              <img src={foto} alt="Mi foto" className="hero-img"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;