// src/components/Page.jsx
import React from 'react';

function Page({
  title,
  content,
  isActive,
  pageNumber,
  totalPages,
  onNavigatePrevious,
  onNavigateNext,
  isFirstPoem
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
          {content.map((line, index) => (
            <p key={index}>{line || '\u00A0'}</p> // Si la línea está vacía, inserta un espacio para crear el salto de párrafo.
          ))}
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