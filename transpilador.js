// transpilador.js
// Motor de HTES (Etapa 1)
//
// Qué hace este archivo:
//   1. Lee un archivo .htes que le pasas por la terminal
//   2. Busca cada etiqueta en español del diccionario
//   3. La reemplaza por su equivalente en HTML5 (inglés)
//   4. Guarda el resultado como un archivo .html nuevo
//
// Cómo se usa desde la terminal:
//   node transpilador.js ejemplos/pagina.htes
//
// Esto generará: ejemplos/pagina.html

const fs = require("fs");
const path = require("path");
const { ETIQUETAS, ATRIBUTOS } = require("./src/diccionario");

function transpilar(codigoHtes) {
  let resultado = codigoHtes;

  // Paso 1: traducir atributos (clase=, ruta=, fuente=...)
  // Importante: esto va ANTES de traducir etiquetas, porque buscamos
  // el atributo seguido de "=", sin importar en qué etiqueta esté.
  for (const [es, en] of Object.entries(ATRIBUTOS)) {
    if (es === en) continue; // no hace falta tocar id="..." si ya es igual
    const patronAtributo = new RegExp(`\\b${es}=`, "g");
    resultado = resultado.replace(patronAtributo, `${en}=`);
  }

  // Paso 2: traducir etiquetas (igual que en la Etapa 1 y 2)
  for (const [es, en] of Object.entries(ETIQUETAS)) {
    const apertura = new RegExp(`<${es}(?=[\\s>])`, "g");
    resultado = resultado.replace(apertura, `<${en}`);

    const cierre = new RegExp(`</${es}>`, "g");
    resultado = resultado.replace(cierre, `</${en}>`);
  }

  return resultado;
}

function main() {
  const rutaEntrada = process.argv[2];

  if (!rutaEntrada) {
    console.error("Uso: node transpilador.js <archivo.htes>");
    process.exit(1);
  }

  if (!fs.existsSync(rutaEntrada)) {
    console.error(`No encontré el archivo: ${rutaEntrada}`);
    process.exit(1);
  }

  const codigoHtes = fs.readFileSync(rutaEntrada, "utf-8");
  const codigoHtml = transpilar(codigoHtes);

  const rutaSalida = rutaEntrada.replace(/\.htes$/, ".html");
  fs.writeFileSync(rutaSalida, codigoHtml, "utf-8");

  console.log(`Listo. Generé: ${rutaSalida}`);
}

main();
