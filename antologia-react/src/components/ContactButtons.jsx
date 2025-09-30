import React from 'react';

// Este componente ahora usa una librería de iconos (Remix Icon) en lugar de archivos SVG.
function ContactButtons() {
  return (
    <div className="action-buttons" style={{ marginTop: '2rem', justifyContent: 'center' }}>
      <a 
        className="icon-btn whatsapp-icon" 
        title="Escríbeme por WhatsApp" 
        target="_blank" 
        rel="noopener noreferrer"
        href="https://wa.me/34641868620"
        aria-label="Escríbeme por WhatsApp"
      >
        <i className="ri-whatsapp-line"></i>
      </a>
      <a 
        className="icon-btn ig-icon" 
        title="Sígueme en Instagram" 
        target="_blank" 
        rel="noopener noreferrer"
        href="https://www.instagram.com/danielsid/"
        aria-label="Sígueme en Instagram"
      >
        <i className="ri-instagram-line"></i>
      </a>
      <a 
        className="icon-btn email-icon" 
        title="Envíame un correo" 
        href="mailto:garciadanielsid@gmail.com"
        aria-label="Envíame un correo"
      >
        <i className="ri-mail-line"></i>
      </a>
    </div>
  );
}

export default ContactButtons;