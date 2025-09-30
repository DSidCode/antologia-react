// src/components/DonationButtons.jsx
import React from 'react';

// Importamos los logos SVG desde la carpeta de assets.
// Usamos el alias '@' que apunta a la carpeta 'src' para evitar errores con rutas relativas.
import paypalLogo from '@/assets/img/PayPal.svg';
import bizumLogo from '@/assets/img/Bizum-0.svg';
import nequiLogo from '@/assets/img/nequi.svg';

function DonationButtons() {
  return (
    <div className="action-buttons" style={{ marginTop: '2rem', justifyContent: 'center' }}>
      <a className="icon-btn paypal-icon" title="Donar con PayPal" target="_blank" href="#" aria-label="Donar con PayPal">
        <img src={paypalLogo} alt="Logo de PayPal" />
      </a>
      <a className="icon-btn bizum-icon" title="Donar con Bizum" href="#" aria-label="Donar con Bizum">
        <img src={bizumLogo} alt="Logo de Bizum" />
      </a>
      <a className="icon-btn nequi-icon" title="Donar con Nequi" href="#" aria-label="Donar con Nequi">
        <img src={nequiLogo} alt="Logo de Nequi" />
      </a>
    </div>
  );
}

export default DonationButtons;