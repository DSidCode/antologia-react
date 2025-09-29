import { useState } from 'react';
import './assets/css/style.css';

// 1. Importamos nuestro nuevo componente Book.
import Book from './components/Book.jsx';

function App() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  // 1. Estado para la página actual ('index' o el id de un poema).
  const [currentPage, setCurrentPage] = useState('index');

  const handleOpenBook = () => {
    setIsBookOpen(true);
    setCurrentPage('index'); // Siempre abrimos en el índice.
  };

  const handleCloseBook = () => {
    setIsBookOpen(false);
  };

  document.body.classList.toggle('book-is-open', isBookOpen);

  return (
    <>
      {isBookOpen ? (
        // 2. Pasamos el estado de la página y la función para actualizarlo.
        <Book
          onCloseBook={handleCloseBook}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        // La portada del libro se queda aquí por ahora.
        <header className="book-cover">
          <div className="cover-content">
            <h1 className="italic-font">Antología</h1>
            <h2>Del Amor Y Otras Nostalgias</h2>
            <p className="quote">"Escribo para no perderme en los laberintos de mi propia mente."</p>
            <button onClick={handleOpenBook} className="cta-button">Leer Antología</button>
            <a href="/index.html" className="back-to-portfolio">Volver al Portafolio</a>
          </div>
        </header>
      )}
    </>
  );
}

export default App;
