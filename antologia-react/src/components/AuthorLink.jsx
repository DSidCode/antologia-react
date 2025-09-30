// src/components/AuthorLink.jsx
import React from 'react';

function AuthorLink() {
  // El estilo cyberpunk neón funciona mejor sobre un fondo oscuro.
  // Este div simula un "glitch" o un bloque oscuro para que el enlace resalte.
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem', padding: '1rem', background: '#1a1a1a', borderRadius: '4px' }}>
      <a href="https://danisid.com" target="_blank" rel="noopener noreferrer" className="neon-link" style={{ fontSize: '1.2rem' }}>
        &gt;&gt; Visitar danisid.com
      </a>
    </div>
  );
}

export default AuthorLink;