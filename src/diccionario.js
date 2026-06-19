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
  hipertexto: "html",
  cabeza: "head",
  titulo: "title",
  cuerpo: "body",
  meta: "meta",
  estilo: "style",
  guion: "script",
};

module.exports = { ETIQUETAS };
