export function getRandomColor() {
  const h = Math.floor(Math.random() * 360); 
  const s = Math.floor(Math.random() * 101); 
  const l = Math.floor(Math.random() * 101); 
  return `hsl(${h}, ${s}%, ${l}%)`; 
}
  
  export function setRandomColors(elements) {
    elements.forEach(element => {
      const randomColor = getRandomColor();
      element.style.setProperty('--random-color',randomColor);
    });
  }
  