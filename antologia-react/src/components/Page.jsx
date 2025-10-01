// src/components/Page.jsx
import React from 'react';
import SafePhoneNumber from './SafePhoneNumber';

function Page({
  title,
  content,
  isActive,  
  pageNumber,
  totalPages,
  onNavigatePrevious,
  onNavigateNext,
  isFirstPoem,
  specialContent
}) {
  // La clase "active" es importante para que el CSS lo muestre.
  const className = `page ${isActive ? 'active' : ''}`;

  return (
    <section className={className}>
      <div className="page-content">
        <h2>{title}</h2>
        {/* Renderizamos el poema como un solo bloque de texto,
            respetando los saltos de línea y párrafos del array. */}
        <div className="poem-body">
          {content.map((line, index) => {
            // Si la línea contiene el marcador, renderizamos el componente seguro.
            if (typeof line === 'string') {
              if (line.includes('[BIZUM_NUMBER]')) {
                const parts = line.split('[BIZUM_NUMBER]');
                return (
                  <p key={index}>
                    {parts[0]}<SafePhoneNumber numberParts={['641', '868', '620']} />{parts[1]}
                  </p>
                );
              }
              if (line.includes('[NEQUI_NUMBER]')) {
                const parts = line.split('[NEQUI_NUMBER]');
                return (
                  <p key={index}>
                    {parts[0]}<SafePhoneNumber numberParts={['321', '698', '4683']} />{parts[1]}
                  </p>
                );
              }
            }

            // Si no, renderizamos la línea normalmente.
            return <p key={index}>{line || '\u00A0'}</p>;
          })}
          {/* Aquí renderizamos el contenido especial si existe */}
          {specialContent}
        </div>
      </div>
      <div className="pager">
        <button onClick={onNavigatePrevious} className="nav-link prev">
          <span aria-hidden="true">←</span>
          <span className="button-text">{isFirstPoem ? 'Volver al índice' : 'Anterior'}</span>
        </button>
        <span className="page-counter">P. {pageNumber}</span>
        {onNavigateNext && (
          <button onClick={onNavigateNext} className="nav-link next">
            <span className="button-text">Siguiente</span>
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default Page;