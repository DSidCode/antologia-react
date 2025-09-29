// src/components/Index.jsx
import { poems } from './poems.js';

function Index({ isActive, onNavigate }) {
  // La clase "active" es importante para que el CSS lo muestre.
  const className = `indice-container ${isActive ? 'active' : ''}`;

  const handleLinkClick = (e, pageId) => {
    e.preventDefault(); // Evitamos que el enlace cambie la URL directamente.
    onNavigate(pageId); // Llamamos a la función de navegación del padre.
  };

  return (
    <div className={className}>
      <div className="indice-intro">
        <h2>Índice</h2>
        <p>Una colección de poemas sobre el amor, la tecnología y la melancolía que habita entre líneas de código.</p>
      </div>

      <ul className="indice-list">
        {poems.map(poem => (
          <li key={poem.id}>
            <a href={`#${poem.id}`} className="indice-link" onClick={(e) => handleLinkClick(e, poem.id)}>
              {poem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;