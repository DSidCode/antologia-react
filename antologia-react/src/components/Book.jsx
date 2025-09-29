import Index from './Index.jsx';
import Page from './Page.jsx';
import { poems } from './poems.js';

function Book({ onCloseBook, currentPage, setCurrentPage }) {
  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
  };

  const handleHeaderLinkClick = (e) => {
    e.preventDefault();
    handleNavigate('index');
  };

  return (
    <>
      {/* Cabecera de navegación del libro */}
      <header className="book-header">
        <a href="#indice" className="nav-pill" onClick={handleHeaderLinkClick}>Índice</a>
        <a href="/index.html" className="nav-pill portfolio-link">Portafolio</a>
        <button onClick={onCloseBook} className="nav-pill">Cerrar Libro</button>
      </header>

      {/* Contenido principal del libro. Este es el contenedor relativo. */}
      <div className="book">
        {/* Renderizamos el índice y le pasamos la función de navegación */}
        <Index
          isActive={currentPage === 'index'}
          onNavigate={handleNavigate}
        />

        {/* Renderizamos una página para cada poema */}
        {poems.map((poem) => (
          <Page
            key={poem.id}
            isActive={currentPage === poem.id}
            title={poem.title}
            content={poem.content}
          />
        ))}
      </div>

      {/* Pie de página con la paginación */}
      <footer className="book-footer">
        <button className="nav-pill">Anterior</button>
        <button className="nav-pill">Siguiente</button>
      </footer>
    </>
  );
}

export default Book;
