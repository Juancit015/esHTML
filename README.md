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

🚧 En desarrollo activo — Etapa 1 completada.

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
