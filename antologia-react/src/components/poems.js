// src/components/poems.js

export const poemsData = {
  'poema-1': {
    title: 'Corazón de Pixeles',
    content: [
      'En el vasto lienzo de la noche digital,',
      'donde los sueños se tejen con hilos de luz,',
      'mi corazón late en código binario,',
      'un pulso constante, un anhelo virtual.',
      'Cada pixel, un suspiro; cada línea, un verso,',
      'buscando tu rostro en la inmensidad de la red,',
      'un amor intangible, un universo',
      'donde solo existen tú y mi soledad.'
    ]
  },
  'poema-2': {
    title: 'La Sombra del Código',
    content: [
      'Bajo la sombra de un firewall caído,',
      'se esconde el eco de un "hola mundo" olvidado,',
      'un bucle infinito de melancolía,',
      'donde cada iteración es un día baldío.',
      'Soy un algoritmo sin propósito, un error 404,',
      'en la página en blanco de tu memoria,',
      'buscando una ruta que me lleve a tu ser,',
      'antes de que el sistema declare mi no-victoria.'
    ]
  },
  // Puedes añadir el resto de los poemas aquí...
  'poema-3': { title: 'Amanecer en la Red', content: ['Contenido no disponible.'] },
  'poema-4': { title: 'Versos de Silicio', content: ['Contenido no disponible.'] },
  'poema-5': { title: 'El Eco del Servidor', content: ['Contenido no disponible.'] },
  'poema-6': { title: 'Nostalgia Binaria', content: ['Contenido no disponible.'] },
};

export const poems = Object.entries(poemsData).map(([id, data]) => ({ id, ...data }));