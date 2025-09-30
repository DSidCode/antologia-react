// src/components/ContactButtons.jsx
import React from 'react';

function ContactButtons() {
  return (
    <div className="action-buttons" style={{ marginTop: '2rem', justifyContent: 'center' }}>
      <a className="icon-btn whatsapp-icon" title="Escribir por WhatsApp" target="_blank" rel="noopener noreferrer" href="https://wa.me/34641868620" aria-label="Escribir por WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a className="icon-btn ig-icon" title="Enviar mensaje en Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/danielsid/" aria-label="Enviar mensaje en Instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a className="icon-btn email-icon" title="Enviar un correo electrónico" href="mailto:garciadanielsid@gmail.com" aria-label="Enviar un correo electrónico">
        <i className="fa-regular fa-envelope"></i>
      </a>
    </div>
  );
}

export default ContactButtons;