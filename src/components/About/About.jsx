import { motion } from 'framer-motion';
import './About.css';
import Fotocv from '../../assets/nahuelManenti.CV_Foto.jpg';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre Mí
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Soy un desarrollador frontend apasionado por crear experiencias web excepcionales. 
              Con experiencia en React, JavaScript y CSS moderno, me especializo en construir 
              interfaces de usuario atractivas y funcionales.
            </p>
            <p>
              Mi objetivo es combinar estética y funcionalidad para crear soluciones digitales 
              que no solo se vean bien, sino que también ofrezcan una experiencia de usuario fluida 
              y accesible para todos.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Nombre:</strong>
                <span>Nahuel Manenti</span>
              </div>
              <div className="detail-item">
                <strong>Email:</strong>
                <span>NahuelManenti@gmail.com</span>
              </div>
              <div className="detail-item">
                <strong>Edad:</strong>
                <span>29 años</span>
              </div>
              <div className="detail-item">
                <strong>Ubicación:</strong>
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
            <a href="/NahuelManenti.CV_programador.pdf" className="btn">Descargar CV</a>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <div >
                <img src={Fotocv} alt="mi-cv" className="about-img" />
              </div>
              <div className="background-element"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;