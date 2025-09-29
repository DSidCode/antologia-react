// src/components/Page.jsx
import React from 'react';

function Page({ title, content, isActive }) {
  // La clase "active" es importante para que el CSS lo muestre.
  const className = `page ${isActive ? 'active' : ''}`;

  return (
    <section className={className}>
      <div className="page-content">
        <h2>{title}</h2>
        {content.map((line, index) => <p key={index}>{line}</p>)}
      </div>
      {/* Placeholder para el paginador que se añadirá más adelante */}
    </section>
  );
}

export default Page;