# Changelog del Proyecto: Antología

Este documento registra todos los cambios significativos realizados en el proyecto "Antología: Del Amor Y Otras Nostalgias".

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