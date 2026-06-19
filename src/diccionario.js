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
  division: "div",
  parrafo: "p",
  t1: "h1",
  t2: "h2",
  t3: "h3",
  t4: "h4",
  t5: "h5",
  t6: "h6",
};

module.exports = { ETIQUETAS };
