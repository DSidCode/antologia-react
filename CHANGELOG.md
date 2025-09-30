# Changelog del Proyecto: Antología

Este documento registra todos los cambios significativos realizados en el proyecto "Antología: Del Amor Y Otras Nostalgias".

---

## [v2.5.0] - Refactorización de Componentes y Mejoras de Usabilidad

### `Added`
- **Estado Activo en Navegación**: Se implementó un indicador visual (`.active`) en los menús de navegación del libro para resaltar la página que el lector está viendo actualmente, mejorando la orientación.
- **Enlace de Autor Contextual**: Se creó el componente `AuthorLink` para mostrar un enlace estilizado al portafolio del autor (`danisid.com`) de forma orgánica dentro de la página de la autobiografía.

### `Changed`
- **Refactorización a Componente Reutilizable**: Se refactorizaron los componentes duplicados `SafeBizumNumber` y `SafeNequiNumber` en un único componente `SafePhoneNumber`, siguiendo el principio DRY (Don't Repeat Yourself) y mejorando la mantenibilidad.
- **Mejora de la Experiencia de Autor**: Se eliminó el enlace "Portafolio" de los menús de navegación principales para una experiencia de lectura más inmersiva.
- **Estilo Cyberpunk**: Se aplicó un efecto de "neón cyberpunk" al enlace del autor, dándole una identidad visual única.
- **Diagramación Profesional**: Se mejoró la presentación del texto en la página de la autobiografía, desactivando la separación de palabras con guiones (`hyphens: none`) y usando alineación a la izquierda para una apariencia más limpia y profesional.

### `Fixed`
- **Error de Sintaxis JSX**: Se corrigió un error de token inesperado (`>>`) en el componente `AuthorLink` utilizando la entidad HTML correcta (`&gt;&gt;`).
- **Bug de Renderizado de Componente**: Se solucionó un error lógico en `Book.jsx` que impedía que el componente `AuthorLink` se mostrara en la página de la autobiografía.

---

## [v2.4.0] - Integración de Donaciones y Mejoras de Seguridad

### `Added`
- **Pasarela de Donaciones**: Se implementó una sección completa para que los lectores puedan apoyar al autor, incluyendo:
    - **PayPal**: Enlace directo a `paypal.me`.
    - **Bizum y Nequi**: Se muestran los números de teléfono para transferencias directas.
    - **Modal con Código QR**: Se añadió una ventana modal moderna y flotante que muestra un código QR para facilitar las donaciones a través de Nequi.
- **Ofuscación de Números de Teléfono**: Se crearon los componentes `SafeBizumNumber.jsx` y `SafeNequiNumber.jsx` para renderizar los números de teléfono en el lado del cliente, protegiéndolos de bots de spam y rastreadores.

### `Fixed`
- **Ruta del Favicon**: Se corrigió la ruta del favicon en `index.html` para que apunte al archivo correcto dentro de `src/assets/img`.
- **Error Crítico de Renderizado**: Se solucionó un bug en el componente `DonationButtons.jsx` causado por una incorrecta implementación del hook `useState`, que impedía que la aplicación se renderizara.

### `Changed`
- **Componente `Page.jsx`**: Se actualizó para detectar y renderizar dinámicamente los componentes de ofuscación de números de teléfono.
- **Componente `DonationButtons.jsx`**: Se refactorizó para incluir la lógica de la ventana modal del código QR de Nequi.
- **CSS**: Se añadieron nuevos estilos en `style.css` para la ventana modal, asegurando un diseño responsivo y moderno.

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

## [v2.3.0] - Implementación de Componentes de Interacción y Mejoras de Build

### `Added`
- **Componente de Donaciones**: Se creó el componente `DonationButtons.jsx` para mostrar las opciones de apoyo al autor (PayPal, Bizum, Nequi).
- **Logos SVG Personalizados**: Se añadieron los archivos SVG de los logos de las plataformas de pago a la carpeta `src/assets/img`.
- **Configuración de Alias de Ruta**: Se configuró un alias de ruta (`@/`) en `vite.config.js` que apunta al directorio `src/`, simplificando y robusteciendo las importaciones de módulos en todo el proyecto.

### `Changed`
- **Botones de Apoyo**: Se refactorizó la implementación de los botones de donación para utilizar los nuevos logos SVG importados, en lugar de iconos genéricos o de librerías externas.

### `Fixed`
- **Error de Importación de Assets**: Se solucionó un error de build (`Failed to resolve import`) que ocurría al intentar importar los archivos SVG. La configuración del alias de ruta en Vite resolvió el problema de forma definitiva.
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

---
