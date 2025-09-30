// src/components/SafePhoneNumber.jsx
import React, { useState, useEffect } from 'react';

/**
 * Componente reutilizable que renderiza un número de teléfono desde un array de partes
 * para ofuscarlo y protegerlo de bots de spam simples.
 * @param {object} props
 * @param {string[]} props.numberParts - Un array con las partes del número a mostrar.
 */
function SafePhoneNumber({ numberParts }) {
  const [number, setNumber] = useState('...cargando...');

  useEffect(() => {
    // Construimos el número en el lado del cliente uniendo las partes con un espacio.
    const fullNumber = numberParts.join(' ');
    setNumber(fullNumber);
  }, [numberParts]);

  return <span>{number}</span>;
}

export default SafePhoneNumber;