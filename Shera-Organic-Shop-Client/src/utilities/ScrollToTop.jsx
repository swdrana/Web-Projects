// ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    // Scroll to the top when the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default ScrollToTop;
