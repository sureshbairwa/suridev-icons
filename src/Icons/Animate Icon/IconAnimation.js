import { useEffect } from 'react';
import { setRandomColors } from './RandomColor'; 
import './Animation.css'
const IconAnimation = (intervalTime = 2000) => {
  useEffect(() => {
    function updateColors() {
      const elements = document.querySelectorAll('.icon-animation');
      setRandomColors(elements,'--random-color'); 
    }

    updateColors();
    const interval = setInterval(updateColors, intervalTime); 

    return () => clearInterval(interval); 
  }, [intervalTime]);
};

export default IconAnimation;
