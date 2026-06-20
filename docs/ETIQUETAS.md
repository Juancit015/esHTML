# Diccionario de etiquetas

Mapeo oficial de etiquetas HTES → HTML5. Esta es la fuente de verdad;
vive como código en [`src/diccionario.js`](../src/diccionario.js).

## Etapa 1 — El esqueleto ✅

Las etiquetas que existen en todo documento HTML, sin atributos todavía.

| HTES         | HTML5    | Descripción                              |
|--------------|----------|-------------------------------------------|
| `hipertexto` | `html`   | Elemento raíz del documento                |
| `cabeza`     | `head`   | Contiene metadatos del documento           |
| `titular`    | `title`  | Título en la pestaña del navegador         |
| `cuerpo`     | `body`   | Contenido visible de la página             |
| `meta`       | `meta`   | Metadatos: charset, viewport, descripción  |
| `estilo`     | `style`  | Estilos CSS incrustados                    |
| `comportamiento` | `script` | Código JavaScript incrustado o enlazado |

## Etapa 2 — Estructura visual ✅

| HTES           | HTML5    | Descripción                                  |
|----------------|----------|-----------------------------------------------|
| `encabezado`   | `header` | Cabecera de la página o de una sección         |
| `navegacion`   | `nav`    | Bloque de enlaces de navegación                |
| `principal`    | `main`   | Contenido principal único de la página         |
| `seccion`      | `section`| Sección temática con encabezado propio         |
| `pie-pagina`   | `footer` | Pie de página o de sección                     |
| `contenedor`   | `div`    | Contenedor genérico de bloque                  |
| `parrafo`      | `p`      | Párrafo de texto                               |
| `titulo1`      | `h1`     | Título de nivel 1                              |
| `subtitulo2`   | `h2`     | Título de nivel 2                              |
| `subtitulo3`   | `h3`     | Título de nivel 3                              |
| `subtitulo4`   | `h4`     | Título de nivel 4                              |
| `subtitulo5`   | `h5`     | Título de nivel 5                              |
| `subtitulo6`   | `h6`     | Título de nivel 6                              |

## Etapa 3 — Atributos básicos ✅

| Atributo HTES | Atributo HTML5 | Descripción                          |
|---------------|----------------|----------------------------------------|
| `clase`       | `class`        | Clase CSS para dar estilo al elemento  |
| `ruta`        | `href`         | Destino de un enlace                   |
| `fuente`      | `src`          | Origen de una imagen, audio, video...  |
| `alt`         | `alt`          | Texto alternativo de una imagen        |
| `id`          | `id`           | Identificador único del elemento       |

Etiquetas nuevas de esta etapa (las que más usan estos atributos):

| HTES      | HTML5 | Descripción           |
|-----------|-------|------------------------|
| `enlace`  | `a`   | Hipervínculo            |
| `imagen`  | `img` | Imagen incrustada       |

## Etapa 4 — Listas y elementos en línea ✅

| HTES          | HTML5  | Descripción                              |
|---------------|--------|--------------------------------------------|
| `lista`       | `ul`   | Lista desordenada con viñetas               |
| `lista-ord`   | `ol`   | Lista ordenada, numerada                    |
| `elemento`    | `li`   | Elemento dentro de una lista                |
| `fragmento`   | `span` | Contenedor genérico en línea sin semántica  |

## Etapa 5 — Formularios ✅

| HTES           | HTML5      | Descripción                                |
|----------------|------------|----------------------------------------------|
| `formulario`   | `form`     | Formulario para captura y envío de datos     |
| `entrada`      | `input`    | Campo de entrada: texto, email, número...    |
| `boton`        | `button`   | Botón interactivo                            |
| `etiqueta`     | `label`    | Etiqueta asociada a un campo                 |
| `seleccionar`  | `select`   | Lista desplegable de opciones                |
| `opcion`       | `option`   | Opción dentro de un select                   |
| `area-texto`   | `textarea` | Área de texto multilínea                     |

Atributos con valor:

| Atributo HTES | Atributo HTML5 | Descripción                          |
|---------------|----------------|----------------------------------------|
| `tipo`        | `type`         | Tipo de entrada: text, email, submit...|
| `nombre`      | `name`         | Nombre del campo al enviar el formulario|
| `valor`       | `value`        | Valor de una opción o campo            |
| `marcador`    | `placeholder`  | Texto de ejemplo dentro del campo      |
| `para`        | `for`          | Conecta una etiqueta con su campo (id) |

Atributos booleanos (sin `=valor`, solo la palabra sola):

| Atributo HTES   | Atributo HTML5 | Descripción                      |
|-----------------|----------------|------------------------------------|
| `requerido`     | `required`     | El campo es obligatorio            |
| `seleccionado`  | `checked`      | Checkbox/radio marcado por defecto |
| `deshabilitado` | `disabled`     | El campo no se puede editar        |

## Etapa 6 — Atributos globales y específicos ✅

Para que las 33 etiquetas existentes funcionen completas, sin huecos,
como sus equivalentes reales en HTML5.

Atributos globales (funcionan en *cualquier* etiqueta, no solo en una):

| Atributo HTES        | Atributo HTML5 | Descripción                              |
|-----------------------|----------------|---------------------------------------------|
| `titulo-emergente`   | `title`        | Texto que aparece al pasar el mouse encima |
| `idioma`             | `lang`         | Idioma del elemento o del documento        |
| `estilo-en-linea`    | `style`        | CSS aplicado directamente al elemento      |

Atributos específicos de `enlace`:

| Atributo HTES | Atributo HTML5 | Descripción                              |
|---------------|----------------|---------------------------------------------|
| `objetivo`    | `target`       | Dónde abrir el enlace (ej: `_blank`)       |
| `descargar`   | `download`     | Fuerza la descarga del archivo enlazado    |

Atributos específicos de `imagen`:

| Atributo HTES | Atributo HTML5 | Descripción          |
|---------------|----------------|------------------------|
| `ancho`       | `width`        | Ancho de la imagen     |
| `alto`        | `height`       | Alto de la imagen      |

Atributos específicos de `entrada` y `area-texto`:

| Atributo HTES | Atributo HTML5 | Descripción                                |
|---------------|----------------|-----------------------------------------------|
| `maximo`      | `max`          | Valor máximo permitido                       |
| `minimo`      | `min`          | Valor mínimo permitido                       |
| `patron`      | `pattern`      | Expresión regular de validación              |
| `filas`       | `rows`         | Alto del área de texto, en filas             |
| `columnas`    | `cols`         | Ancho del área de texto, en columnas         |

Atributos específicos de `meta`:

| Atributo HTES | Atributo HTML5 | Descripción                                      |
|---------------|----------------|------------------------------------------------------|
| `n-meta`      | `name`         | Qué tipo de metadato es (ej: `description`)        |
| `contenido`   | `content`      | El valor de ese metadato                            |

Atributos específicos de `formulario`:

| Atributo HTES | Atributo HTML5 | Descripción                          |
|---------------|----------------|------------------------------------------|
| `accion`      | `action`       | A dónde se envían los datos del formulario|
| `metodo`      | `method`       | Cómo se envían: `get` o `post`            |

Con estos 17 atributos nuevos (3 globales + 14 específicos), el total
sube a **29 atributos** (26 con valor + 3 booleanos), cubriendo por
completo las 33 etiquetas actuales.

## Regla constitucional

Ningún nombre de etiqueta lleva tilde. Ver el README principal para más
contexto sobre esta decisión.

## Nota sobre nombres revisados

Los nombres `t1`-`t6`, `division` y `tramo` de las primeras etapas se
renombraron a `titulo1`/`subtitulo2`-`subtitulo6`, `contenedor` y
`fragmento` por ser más descriptivos. `titulo` se renombró a `titular`
(para `<title>`), y `guion` se renombró a `comportamiento` (para
`<script>`) para describir mejor su función sin entrar en conflicto con
`codigo` (futura etiqueta para `<code>`). `titular` (para `<title>`) y
`titulo1` (para `<h1>`) son nombres distintos y no entran en conflicto.

## ¿Por qué este orden?

Cada etapa solo se agrega cuando la anterior está implementada y probada
en el transpilador. Así el diccionario nunca documenta etiquetas que el
código todavía no soporta.
