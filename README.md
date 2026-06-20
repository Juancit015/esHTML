# esHTML (HTES)

**HiperTexto En Español.** Un preprocesador que convierte etiquetas HTML escritas en español a HTML5 estándar.

```htes
<hipertexto>
  <cuerpo>
    <parrafo>Hola mundo</parrafo>
  </cuerpo>
</hipertexto>
```

se convierte en:

```html
<html>
  <body>
    <p>Hola mundo</p>
  </body>
</html>
```

## Estado del proyecto

🚧 En desarrollo activo — Etapas 1 a 5 completadas (33 etiquetas, atributos
con valor y booleanos). Extensión de VS Code disponible en
[esHTML-vscode](https://github.com/Juancit015/esHTML-vscode).

Ver el progreso por etapas en [`docs/ETAPAS.md`](docs/ETAPAS.md).

## Requisitos

- [Node.js](https://nodejs.org) instalado (cualquier versión reciente, v18+).

## Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Juancit015/esHTML.git
   cd esHTML
   ```

2. Escribe un archivo `.htes` (puedes guiarte con `ejemplos/pagina.htes`).

3. Transpílalo:
   ```bash
   node transpilador.js ejemplos/pagina.htes
   ```

4. Esto genera un archivo `.html` junto al original, listo para abrir en cualquier navegador.

## Editar en vivo (modo watch + Live Server)

Si no quieres correr el comando a mano cada vez que editas, usa la bandera `--watch`:

```bash
node transpilador.js ejemplos/pagina.htes --watch
```

El programa queda corriendo en la terminal y regenera el `.html`
automáticamente cada vez que guardas el archivo `.htes` (Ctrl+S). Para
detenerlo, presiona `Ctrl+C`.

Combínalo con la extensión **Live Server** de VS Code (clic derecho sobre
el `.html` generado → "Open with Live Server") y el navegador se
refrescará solo cada vez que el `.htes` cambie. El flujo completo queda:
editas → guardas → se regenera el `.html` → el navegador se refresca,
sin tocar la terminal de nuevo.

Nota: Live Server no entiende `.htes` directamente — siempre apunta al
`.html` que el transpilador ya generó.

## Estructura del proyecto

```
esHTML/
├── transpilador.js     # Punto de entrada — el programa que corres
├── src/
│   └── diccionario.js  # Mapeo de etiquetas español -> inglés
├── docs/                # Documentación del proyecto
├── ejemplos/            # Archivos .htes de muestra
└── README.md
```

## Regla del lenguaje

Ningún nombre de etiqueta lleva tilde. Esto evita problemas de codificación
entre distintos editores, terminales y sistemas operativos.

| Correcto   | Incorrecto |
|------------|------------|
| `parrafo`  | `párrafo`  |
| `boton`    | `botón`    |
| `opcion`   | `opción`   |

## Documentación

- [`docs/ETIQUETAS.md`](docs/ETIQUETAS.md) — diccionario completo de etiquetas español ↔ inglés
- [`docs/ETAPAS.md`](docs/ETAPAS.md) — plan de desarrollo por etapas
- [`docs/CONTRIBUIR.md`](docs/CONTRIBUIR.md) — cómo proponer nuevas etiquetas o mejoras

## Licencia

MIT — ver [`LICENSE`](LICENSE).
