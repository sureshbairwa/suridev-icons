import React from 'react';

const IconComponent = ({ SvgComponent, height = "24", width = "24", fill = "none", stroke = "black", strokeWidth = "3", opacity = "1" }) => {
  return (
    <SvgComponent
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      opacity={opacity}
    />
  );
};

export default IconComponent;
