import { useState, useEffect } from 'react';
import './assets/css/style.css';

// 1. Importamos nuestro nuevo componente Book.
import Book from './components/Book.jsx';

// Clave para guardar el estado en localStorage
const LAST_PAGE_KEY = 'antologia-last-page';

function App() {
  // Intentamos leer la última página guardada. Si no existe, o si el libro no estaba abierto,
  // mostramos la portada.
  const savedPage = localStorage.getItem(LAST_PAGE_KEY);
  const initialState = savedPage ? JSON.parse(savedPage) : { isBookOpen: false, pageId: 'index' };

  const [isBookOpen, setIsBookOpen] = useState(initialState.isBookOpen);
  const [currentPage, setCurrentPage] = useState(initialState.pageId);

  const handleOpenBook = () => {
    setIsBookOpen(true);
    setCurrentPage('index'); // Siempre abrimos en el índice.
  };

  const handleCloseBook = () => {
    setIsBookOpen(false);
  };

  // Usamos useEffect para manipular el DOM de forma segura solo en el navegador.
  // También guardamos el estado actual en localStorage cada vez que cambia.
  useEffect(() => {
    document.body.classList.toggle('book-is-open', isBookOpen);
    if (isBookOpen) {
      localStorage.setItem(LAST_PAGE_KEY, JSON.stringify({ isBookOpen: true, pageId: currentPage }));
    } else {
      // Si el libro se cierra, eliminamos el estado para que la próxima vez empiece en la portada.
      localStorage.removeItem(LAST_PAGE_KEY);
    }
  }, [isBookOpen, currentPage]); // Se ejecuta cuando el libro se abre/cierra o la página cambia.

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
          </div>
          <p className="author-credit">
            Autor: Daniel H. García Alzate | <a href="https://danisid.com" target="_blank" rel="noopener noreferrer" className="neon-link">DaniSid.com</a>
          </p>
        </header>
      )}
    </>
  );
}

export default App;
