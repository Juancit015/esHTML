// transpilador.js
// Motor de HTES
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
//
// MODO WATCH — para no tener que correr el comando a mano cada vez:
//   node transpilador.js ejemplos/pagina.htes --watch
//
// Con --watch, el programa no termina: se queda corriendo en la terminal,
// vigilando el archivo .htes. Cada vez que lo guardas (Ctrl+S), regenera
// el .html automáticamente. Combínalo con la extensión Live Server de
// VS Code apuntando al .html para que el navegador se refresque solo.
// Para detenerlo, presiona Ctrl+C en la terminal.

const fs = require("fs");
const path = require("path");
const { ETIQUETAS, ATRIBUTOS, ATRIBUTOS_BOOLEANOS } = require("./src/diccionario");

function transpilar(codigoHtes) {
  let resultado = codigoHtes;

  // Paso 1: traducir atributos con valor (clase=, ruta=, fuente=...)
  // Importante: esto va ANTES de traducir etiquetas, porque buscamos
  // el atributo seguido de "=", sin importar en qué etiqueta esté.
  for (const [es, en] of Object.entries(ATRIBUTOS)) {
    if (es === en) continue; // no hace falta tocar id="..." si ya es igual
    const patronAtributo = new RegExp(`\\b${es}=`, "g");
    resultado = resultado.replace(patronAtributo, `${en}=`);
  }

  // Paso 1.5: traducir atributos booleanos (sin "=valor")
  // Ejemplo: requerido  ->  required
  for (const [es, en] of Object.entries(ATRIBUTOS_BOOLEANOS)) {
    const patronBooleano = new RegExp(`\\b${es}\\b(?!=)`, "g");
    resultado = resultado.replace(patronBooleano, en);
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

function compilarArchivo(rutaEntrada) {
  if (!fs.existsSync(rutaEntrada)) {
    console.error(`No encontré el archivo: ${rutaEntrada}`);
    return false;
  }

  const codigoHtes = fs.readFileSync(rutaEntrada, "utf-8");
  const codigoHtml = transpilar(codigoHtes);

  const rutaSalida = rutaEntrada.replace(/\.htes$/, ".html");
  fs.writeFileSync(rutaSalida, codigoHtml, "utf-8");

  const hora = new Date().toLocaleTimeString("es");
  console.log(`[${hora}] Listo. Generé: ${rutaSalida}`);
  return true;
}

function main() {
  const argumentos = process.argv.slice(2);
  const modoWatch = argumentos.includes("--watch");
  const rutaEntrada = argumentos.find((a) => a !== "--watch");

  if (!rutaEntrada) {
    console.error("Uso: node transpilador.js <archivo.htes> [--watch]");
    process.exit(1);
  }

  if (!fs.existsSync(rutaEntrada)) {
    console.error(`No encontré el archivo: ${rutaEntrada}`);
    process.exit(1);
  }

  // Primera compilación siempre, watch o no.
  compilarArchivo(rutaEntrada);

  if (!modoWatch) {
    return; // comportamiento de siempre: compila una vez y termina
  }

  // --- Modo watch: queda corriendo, vigilando el archivo ---
  console.log(`\nVigilando ${rutaEntrada}... (Ctrl+C para detener)\n`);

  fs.watch(rutaEntrada, (evento) => {
    if (evento === "change") {
      compilarArchivo(rutaEntrada);
    }
  });
}

main();
