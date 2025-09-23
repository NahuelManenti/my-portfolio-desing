import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  });

  // Función de validación
  const validateForm = () => {
    const errors = {};
    const { name, email, subject, message } = formData;

    // Validar nombre
    if (name.trim().length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (name.trim().length > 50) {
      errors.name = 'El nombre no puede exceder 50 caracteres';
    }

    // Validar email
    if (!email) {
      errors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Por favor, ingresa un email válido';
    }

    // Validar asunto
    if (subject.trim().length < 5) {
      errors.subject = 'El asunto debe tener al menos 5 caracteres';
    } else if (subject.trim().length > 100) {
      errors.subject = 'El asunto no puede exceder 100 caracteres';
    }

    // Validar mensaje
    if (message.trim().length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres';
    } else if (message.trim().length > 1000) {
      errors.message = 'El mensaje no puede exceder 1000 caracteres';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formulario antes de enviar
    if (!validateForm()) {
      showNotification('error', 'Por favor, corrige los errores en el formulario');
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Limpiar formulario después del envío exitoso
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormErrors({});
      
      showNotification('success', '¡Mensaje enviado correctamente! Te contactaré pronto.');
      
    } catch (error) {
      console.error('Error enviando el mensaje:', error);
      showNotification('error', 'Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contacto
        </motion.h2>
        
        {/* Notificación */}
        {notification.show && (
          <motion.div 
            className={`notification ${notification.type}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {notification.message}
          </motion.div>
        )}

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>No dudes en contactarme</h3>
            <p>
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o 
              oportunidades para ser parte de tus visiones.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Ubicación</h4>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>NahuelManenti@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Teléfono</h4>
                  <p>+54 911 71413644</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Tu nombre completo" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  disabled={isLoading}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="tu.email@ejemplo.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  disabled={isLoading}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Asunto del mensaje" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  disabled={isLoading}
                  className={formErrors.subject ? 'error' : ''}
                />
                {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Escribe tu mensaje aquí..." 
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={`btn ${isLoading ? 'btn-loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;