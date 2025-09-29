# Antología: Del Amor Y Otras Nostalgias

Este es un proyecto web que presenta una antología de poemas y escritos personales en un formato que simula la experiencia de leer un libro digital. El objetivo es ofrecer una experiencia de lectura limpia, inmersiva y estéticamente cuidada.

**Nota:** Este proyecto se encuentra actualmente en un proceso de migración de una arquitectura de HTML/CSS/JS puro a una aplicación moderna construida con **React**, para mejorar su robustez, mantenibilidad y escalabilidad.

## Características

*   **Experiencia de Libro Digital**: La interfaz está diseñada para sentirse como un libro, con una portada de bienvenida y páginas de contenido.
*   **Navegación Intuitiva**:
    *   Botones de "Siguiente" y "Anterior" para pasar las páginas.
    *   Un índice interactivo para saltar directamente a cualquier poema.
    *   Navegación mediante las flechas del teclado.
    *   Compatibilidad con los botones de "atrás" y "adelante" del navegador.
*   **Diseño Responsivo**: La experiencia se adapta a todos los dispositivos.
    *   **Escritorio/Tableta**: Un layout de libro con una "hoja" central y menús flotantes.
    *   **Móvil**: Un layout de página web con scroll natural para una usabilidad óptima.
*   **Scroll Interno**: Los poemas largos tienen su propia barra de desplazamiento para asegurar que todo el contenido sea accesible sin romper el diseño de la página.
*   **Interactividad**:
    *   Botones para compartir en redes sociales.
    *   Secciones dedicadas para apoyar al autor y contactar.

## Tecnologías

### Versión Original
*   **HTML5**
*   **CSS3**: Con animaciones de transición y diseño responsivo.
*   **JavaScript (Vanilla)**: Para toda la lógica de navegación, visibilidad de páginas y manipulación del DOM.

### Versión Actual (En migración)
*   **React**: Para construir una interfaz de usuario basada en componentes y gestionada por estado.
*   **Vite**: Como herramienta de construcción y servidor de desarrollo.
*   **CSS3**: Los estilos originales se han adaptado para funcionar en el nuevo entorno de componentes.

## Estado del Proyecto

El proyecto ha sido completamente estabilizado en su versión original de JavaScript. Actualmente, se está llevando a cabo una migración profesional a React para adoptar prácticas de desarrollo modernas, eliminar bugs de estado de raíz y facilitar futuras expansiones. El esqueleto de la aplicación React ya está funcional, con la gestión de estado inicial implementada.