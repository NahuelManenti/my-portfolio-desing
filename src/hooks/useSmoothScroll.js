import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const scrollToPosition = absoluteElementTop - offset;

      // Verificar si el navegador soporta scroll behavior
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      } else {
        // Fallback para navegadores antiguos
        window.scrollTo(0, scrollToPosition);
      }
    }
  }, []);

  const scrollToTop = useCallback(() => {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return { scrollToSection, scrollToTop };
};