import { motion } from 'framer-motion';
import './Projects.css';
import miFoto1 from '../../assets/aesthethic.png';
import miFoto2 from '../../assets/mindy-petshop.jpg';
import miFoto3 from '../../assets/mytinerary.png';  

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Aesthethic',
      description: 'Una aplicación de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.',
      tags: ['React', 'Node.js', 'MongoDB', 'Materia ui'],
      image: miFoto1
    },
    {
      id: 2,
      title: 'Mindy PetShop',
      description: 'E-commerce con carrito de compras.',
      tags: ['Html', 'Css', 'JavaScript', 'Boostrap'],
      image: miFoto2
    },
    {
      id: 3,
      title: 'MyTinerary',
      description: 'Página web que muestra lugares turísticos y sus recorridos junto con las opiniones de los usuarios',
      tags: ['React', 'Html', 'Css', 'Bootstrap', 'Heroku'],
      image: miFoto3
    },
    // {
    //   id: 4,
    //   title: 'Clima App',
    //   description: 'Aplicación del clima con pronóstico extendido, localización automática y modo oscuro.',
    //   tags: ['React', 'API', 'Geolocation', 'Dark Mode'],
    //   image: 'proyecto4.jpg'
    // }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mis Proyectos
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div>
                  <img src={project.image} alt="imagenes-web" className="project-img {
"/>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <i className="fas fa-eye"></i>
                    </a>
                    <a href="#" className="project-link">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;