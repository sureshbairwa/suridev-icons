import React from 'react';

const IconComponent = ({ SvgComponent, height = "24", width = "24"}) => {
  return (
    <SvgComponent
      height={height}
      width={width}
    />
  );
};

export default IconComponent;
