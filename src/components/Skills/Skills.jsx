import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 70 },
    // { name: 'UI/UX Design', percentage: 75 }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mis Habilidades
        </motion.h2>
        <div className="skills-content">
          <motion.div 
            className="skills-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Mi conocimiento técnico</h3>
            <p>
              A lo largo de mi carrera, he desarrollado habilidades en diversas tecnologías 
              y frameworks modernos que me permiten crear aplicaciones web robustas y escalables.
            </p>
          </motion.div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;