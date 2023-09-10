import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 1,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
