// diccionario.js
// Mapeo oficial HTES -> HTML5
// Etapa 1: el esqueleto. Estas 7 etiquetas existen en TODO documento HTML.
//
// Regla constitucional del proyecto: NINGÚN nombre de etiqueta lleva tilde.
// Ejemplo correcto:   parrafo
// Ejemplo incorrecto: párrafo
// Esto evita problemas de codificación entre editores, terminales y sistemas
// de archivos distintos.

const ETIQUETAS = {
  // --- Etapa 1: el esqueleto ---
  hipertexto: "html",
  cabeza: "head",
  titulo: "title",
  cuerpo: "body",
  meta: "meta",
  estilo: "style",
  guion: "script",

  // --- Etapa 2: estructura visual ---
  encabezado: "header",
  navegacion: "nav",
  principal: "main",
  seccion: "section",
  "pie-pagina": "footer",
  contenedor: "div",
  parrafo: "p",
  titulo1: "h1",
  subtitulo2: "h2",
  subtitulo3: "h3",
  subtitulo4: "h4",
  subtitulo5: "h5",
  subtitulo6: "h6",

  // --- Etapa 3: las etiquetas que más usan atributos ---
  enlace: "a",
  imagen: "img",

  // --- Etapa 4: listas y elementos en línea ---
  lista: "ul",
  "lista-ord": "ol",
  elemento: "li",
  fragmento: "span",
};

module.exports = { ETIQUETAS };

// ============================================================
// Etapa 3: atributos básicos
// ============================================================
// A diferencia de las etiquetas, los atributos viven DENTRO de
// los símbolos < >. Ejemplo:
//
//   <enlace ruta="https://google.com">
//            ^^^^ esto es un atributo, no una etiqueta
//
// Mismo principio: nombres en español, sin tildes.

const ATRIBUTOS = {
  clase: "class",
  ruta: "href",
  fuente: "src",
  alt: "alt",
  id: "id",
};

module.exports.ATRIBUTOS = ATRIBUTOS;
