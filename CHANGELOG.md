# Changelog del Proyecto: Antología

Este documento registra todos los cambios significativos realizados en el proyecto "Antología: Del Amor Y Otras Nostalgias".

---

## [v2.2.0] - Refinamiento de UI y Funcionalidad de Lectura

### `Added`
- **Navegación Completa**: Se implementó la funcionalidad de los botones "Anterior" y "Siguiente" para una navegación fluida entre poemas.
- **Navegación por Teclado**: Se recuperó la funcionalidad de la versión original para pasar las páginas usando las flechas izquierda y derecha del teclado.
- **Menús de Navegación Completos**: Se restauraron todos los enlaces del menú original (Portada, Índice, Autobiografía, etc.) en la cabecera y pie de página del libro.

### `Changed`
- **Diseño del Índice**: Se rediseñó completamente la página del índice para un aspecto más profesional y moderno, utilizando una tipografía de floritura para el título y numeración automática para la lista de poemas.
- **Formato de Poemas**: Se refactorizó la estructura de datos de los poemas para respetar los saltos de línea y estrofas, mejorando drásticamente la presentación y legibilidad del texto.
- **Contenido Actualizado**: Se reemplazó todo el contenido de marcador de posición con los textos originales de la antología.
- **Diseño de Portada**:
    - Se añadió un crédito de autor en la parte inferior, con un enlace estilizado con un efecto neón cyberpunk.
    - Se implementó un fondo con una textura personalizada y una capa oscura semitransparente para un efecto visual más rico.
- **Paginador Responsivo**: Se rediseñó el paginador para pantallas móviles, simplificándolo a botones de flecha minimalistas y un contador de página con una fuente caligráfica.

### `Fixed`
- **Layout de Páginas**: Se solucionó el problema que causaba que todas las páginas se renderizaran apiladas. Ahora se muestran correctamente una a la vez, ocupando el espacio designado.
- **Layout de Portada**: Se corrigió una regresión que había roto el diseño de la portada, asegurando que se muestre correctamente centrada y a pantalla completa.
- **Error de Despliegue en Netlify**: Se solucionó un error de build (`ENOENT: no such file or directory`) al configurar el `base directory` en Netlify para que apunte al subdirectorio `antologia-react`, donde reside el proyecto.

---

## [v2.1.0] - Implementación del Libro Interactivo y Correcciones de Layout

### `Added`
- **Navegación por Páginas**: Se implementó la lógica de estado en React (`useState`) para gestionar la página activa, permitiendo al usuario navegar entre el índice y los diferentes poemas.
- **Componente de Página**: Se creó el componente `Page.jsx` para renderizar el contenido de cada poema de forma individual.
- **Interactividad del Índice**: El componente `Index.jsx` ahora es interactivo; al hacer clic en un título, se actualiza el estado de la aplicación para mostrar el poema correspondiente.
- **Externalización de Datos**: Los datos de los poemas se movieron a un archivo dedicado (`poems.js`) para mejorar la organización y facilitar futuras actualizaciones.

### `Fixed`
- **Error Crítico de Visualización**: Se solucionó un problema persistente de layout que causaba que el contenido del libro se viera "apretado" o desbordado. La causa era un conflicto entre `display: grid` y el centrado de los elementos hijos.
- **Corrección de Columnas**: Se eliminó la propiedad `columns: 2` del CSS del índice, que dividía la lista en dos columnas estrechas y rompía el diseño de "página única".
- **Conflicto de CSS**: Se resolvieron conflictos entre los estilos por defecto de Vite (`index.css`) y los estilos personalizados del proyecto (`style.css`), unificando el control del layout.

### `Changed`
- **Refactorización del Layout Principal**: Se refactorizó el CSS para que el layout del libro funcione correctamente dentro de la estructura de React. Se adoptó un enfoque de `flexbox` en el contenedor `#root` para asegurar que el contenido del libro se expanda verticalmente de forma correcta.

---

## [v2.0.0] - Inicio de la Migración a React

### `Added`
- **Decisión Estratégica**: Se determinó que la arquitectura de un único archivo HTML con manipulación del DOM era propensa a errores. Se decidió migrar a una arquitectura de componentes moderna con React.
- **Configuración del Entorno Profesional**:
    - Se creó un nuevo proyecto React utilizando Vite.
    - Se resolvió un error crítico de permisos del sistema de archivos (`EPERM: operation not permitted, symlink`) al mover el entorno de desarrollo a un directorio nativo de Linux (`~/Projects`).
- **Inicio de la Migración**:
    - Se movieron los activos existentes (CSS, imágenes) al nuevo proyecto React (`antologia-react`).
    - Se refactorizó el componente principal `App.jsx` para replicar la lógica inicial de la Antología.
    - Se implementó el hook `useState` para gestionar el estado de la aplicación (libro abierto/cerrado).
    - Se inició la componentización creando el componente `Book.jsx`.

---

## [v1.0.0] - Estabilización y Refactorización Completa

### `Fixed`
- **Bug Crítico**: Se solucionó el error principal que impedía mostrar el contenido del libro después de hacer clic en la portada.

### `Added`
- **Navegación y UX**:
    - Se implementó la navegación con los botones de "atrás" y "adelante" del navegador usando `history.pushState`.
    - Se añadió la navegación entre poemas mediante las flechas del teclado.

### `Changed`
- **Animaciones**: Se reemplazaron las animaciones 3D (que causaban inestabilidad) por una transición de fundido y deslizamiento (`fade and slide`), más robusta y elegante.
- **Layout**:
    - Se añadió un contenedor `.page-content` con `overflow-y: auto` y `min-height: 0` para asegurar que el scroll funcione correctamente en poemas largos.
    - Se ajustó el layout para que la "hoja" del libro tenga una proporción vertical (similar a un folio A4) y esté siempre centrada.
- **Estilos**: Se unificó el diseño de menús con botones flotantes y fondo transparente a todas las versiones (móvil y escritorio).
- **Diseño Responsivo**:
    - **Vista Móvil**: Se transformó el layout para que funcione como una página web con scroll natural, eliminando por completo los problemas de superposición.