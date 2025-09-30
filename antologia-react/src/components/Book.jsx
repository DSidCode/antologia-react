import { useEffect, useCallback } from 'react';
import Index from './Index.jsx';
import Page from './Page.jsx';
import { poems } from './poems.js';
import DonationButtons from './DonationButtons.jsx';
import ContactButtons from './ContactButtons.jsx';
import AuthorLink from './AuthorLink.jsx';

function Book({ onCloseBook, currentPage, setCurrentPage }) {
  const poemIds = poems.map(p => p.id);
  const totalPages = poems.length;

  // Usamos useCallback para memorizar las funciones y evitar que el useEffect se ejecute innecesariamente.
  const handlePrevious = useCallback(() => {
    const currentIndex = poemIds.indexOf(currentPage);
    const newPageId = currentIndex > 0 ? poemIds[currentIndex - 1] : 'index'; // Vuelve al índice desde el primer poema
    setCurrentPage(newPageId);
  }, [currentPage, poemIds, setCurrentPage]);

  const handleNext = useCallback(() => {
    const currentIndex = poemIds.indexOf(currentPage);
    if (currentIndex < totalPages - 1) {
      setCurrentPage(poemIds[currentIndex + 1]);
    }
  }, [currentPage, poemIds, totalPages, setCurrentPage]);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
  };

  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    handleNavigate(pageId);
  };

  // Hook para manejar la navegación con el teclado.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Función de limpieza: se ejecuta cuando el componente se desmonta.
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrevious]); // El efecto depende de estas funciones.

  return (
    <>
      {/* Cabecera de navegación del libro */}
      <header className="book-header">
        <button onClick={onCloseBook} className="nav-pill">Portada</button> {/* Este botón cierra el libro, no tiene estado activo */}
        <a href="#indice" className={`nav-pill ${currentPage === 'index' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'index')}>Índice</a>
        <a href="#bio" className={`nav-pill ${currentPage === 'bio' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'bio')}>Autobiografía</a>
        <a href="#apoyo" className={`nav-pill ${currentPage === 'apoyo' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'apoyo')}>Apóyame</a>
        <a href="#escribeme" className={`nav-pill ${currentPage === 'escribeme' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'escribeme')}>Escríbeme</a>
      </header>

      {/* Contenido principal del libro. Este es el contenedor relativo. */}
      <div className="book">
        {/* Renderizamos el índice y le pasamos la función de navegación */}
        <Index
          isActive={currentPage === 'index'}
          onNavigate={handleNavigate}
        />

        {/* Renderizamos una página para cada poema */}
        {poems.map((poem, index) => { // poems ahora incluye las nuevas secciones
          const isLastPoem = index === totalPages - 1;
          let specialContentComponent = null;
          if (poem.specialContent === 'donationButtons') {
            specialContentComponent = <DonationButtons />;
          } else if (poem.specialContent === 'contactButtons') {
            specialContentComponent = <ContactButtons />;
          } else if (poem.specialContent === 'authorLink') {
            specialContentComponent = <AuthorLink />;
          }
          return (
            <Page
              key={poem.id}
              isActive={currentPage === poem.id}
              title={poem.title}
              content={poem.content}
              pageClass={poem.id === 'bio' ? 'page--bio' : ''}
              pageNumber={index + 1}
              totalPages={totalPages}
              onNavigatePrevious={handlePrevious}
              onNavigateNext={!isLastPoem ? handleNext : null}
              isFirstPoem={index === 0}
              specialContent={specialContentComponent}
            />
          );
        })}
      </div>

      {/* Pie de página con la paginación */}
      <footer className="book-footer">
        <button onClick={onCloseBook} className="nav-pill">Portada</button> {/* Este botón cierra el libro, no tiene estado activo */}
        <a href="#indice" className={`nav-pill ${currentPage === 'index' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'index')}>Índice</a>
        <a href="#bio" className={`nav-pill ${currentPage === 'bio' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'bio')}>Autobiografía</a>
        <a href="#apoyo" className={`nav-pill ${currentPage === 'apoyo' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'apoyo')}>Apóyame</a>
        <a href="#escribeme" className={`nav-pill ${currentPage === 'escribeme' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'escribeme')}>Escríbeme</a>
      </footer>
    </>
  );
}

export default Book;
