// src/components/DonationButtons.jsx
import React, { useState } from 'react';
import SafePhoneNumber from './SafePhoneNumber'; // Importamos el componente para el número seguro

// Importamos los logos SVG desde la carpeta de assets.
// Usamos el alias '@' que apunta a la carpeta 'src' para evitar errores con rutas relativas.
import paypalLogo from '@/assets/img/PayPal.svg';
import bizumLogo from '@/assets/img/Bizum-0.svg';
import nequiLogo from '@/assets/img/nequi.svg';
import nequiQR from '@/assets/img/QRNequi.webp'; // Importamos la imagen del QR

function DonationButtons() {
  const [isNequiModalOpen, setNequiModalOpen] = useState(false);
  const [isBizumModalOpen, setBizumModalOpen] = useState(false);

  return (
    <div className="action-buttons" style={{ marginTop: '2rem', justifyContent: 'center' }}>
      <a
        className="icon-btn paypal-icon"
        title="Donar con PayPal"
        target="_blank"
        rel="noopener noreferrer"
        href="https://paypal.me/DSidCode"
        aria-label="Donar con PayPal"
      >
        <img src={paypalLogo} alt="Logo de PayPal" />
      </a>
      <button
        className="icon-btn bizum-icon"
        title="Donar con Bizum"
        onClick={() => setBizumModalOpen(true)}
        aria-label="Donar con Bizum">
        <img src={bizumLogo} alt="Logo de Bizum" />
      </button>
      <button
        className="icon-btn nequi-icon"
        title="Donar con Nequi (Mostrar QR)"
        onClick={() => setNequiModalOpen(true)}
        aria-label="Donar con Nequi (Mostrar QR)">
        <img src={nequiLogo} alt="Logo de Nequi" />
      </button>

      {isNequiModalOpen && (
        <div className="modal-overlay" onClick={() => setNequiModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setNequiModalOpen(false)} aria-label="Cerrar modal">
              &times;
            </button>
            <img src={nequiQR} alt="Código QR para donar con Nequi" className="qr-code-image" />
            <p className="modal-text">Escanea el código para donar con Nequi</p>
          </div>
        </div>
      )}

      {isBizumModalOpen && (
        <div className="modal-overlay" onClick={() => setBizumModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setBizumModalOpen(false)} aria-label="Cerrar modal">
              &times;
            </button>
            <p className="modal-text">
              Puedes enviarme un Bizum al número: <br />
              <SafePhoneNumber numberParts={['641', '868', '620']} />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DonationButtons;