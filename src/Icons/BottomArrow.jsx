import React from 'react'

const BottomArrow = ({height="24" ,width="24"}) => {

  const numericHeight = parseFloat(height);
  const numericWidth = parseFloat(width);

  const transformOrigin = `${numericWidth / 2}px ${numericHeight / 2}px`;
  return (
    <svg  height={height} width={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)', transformOrigin: transformOrigin }} >
 
  <path d="M12 5V19" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  
 
  <path d="M8 9L12 5L16 9" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
  )
}

export default BottomArrow