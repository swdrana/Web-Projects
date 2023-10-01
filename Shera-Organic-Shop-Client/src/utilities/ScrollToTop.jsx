import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);  // This dependency ensures that the effect runs again whenever pathname changes

  return null;
};

export default ScrollToTop;


// with button 
// import React from 'react';

// function ScrollToTopButton() {
  
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div>
//       {/* ... rest of your content ... */}
//       <button onClick={scrollToTop} className="scroll-to-top-button bg-red-600">
//         Scroll to Top
//       </button>
//     </div>
//   );
// }

// export default ScrollToTopButton;


// old not working


// import React, { useRef } from 'react';

// function ScrollToTopButton() {
//   const topRef = useRef(null);

//   const scrollToTop = () => {
//     topRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <div ref={topRef}></div>
//       {/* ... rest of your content ... */}
//       <button onClick={scrollToTop} className="scroll-to-top-button bg-red-600">
//         Scroll to Top
//       </button>
//     </div>
//   );
// }

// export default ScrollToTopButton;
