// src/components/Icon.jsx
import React from 'react';

const Icon = ({ type, className }) => {
  const icons = {
    // Aquí importaremos dinámicamente nuestros iconos SVG
  };

  const IconComponent = icons[type];
  return IconComponent ? <IconComponent className={className} /> : null;
};

export default Icon;