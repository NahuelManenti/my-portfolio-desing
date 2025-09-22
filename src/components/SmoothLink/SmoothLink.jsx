import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const SmoothLink = ({ 
  to, 
  children, 
  className = '', 
  offset = 80,
  onClick,
  ...props 
}) => {
  const { scrollToSection } = useSmoothScroll();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (onClick) {
      onClick(e);
    }

    scrollToSection(to.replace('#', ''));
  };

  return (
    <a 
      href={to} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmoothLink;