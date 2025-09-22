import { motion } from 'framer-motion';
import './Hero.css';
import foto from '../../assets/mi-foto.jpeg';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Hero = () => {

  const { scrollToSection } = useSmoothScroll();

  const handleProjectsClick = (e) => {
    e.preventDefault();
    scrollToSection('projects');
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection('contact');
  };
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
              <button onClick={handleProjectsClick} className="btn">
                Ver Proyectos
              </button>
              <button onClick={handleContactClick} className="btn btn-outline">
                Contactarme
              </button>
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