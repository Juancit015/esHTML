# Diccionario de etiquetas

Mapeo oficial de etiquetas HTES → HTML5. Esta es la fuente de verdad;
vive como código en [`src/diccionario.js`](../src/diccionario.js).

## Etapa 1 — El esqueleto ✅

Las etiquetas que existen en todo documento HTML, sin atributos todavía.

| HTES         | HTML5    | Descripción                              |
|--------------|----------|-------------------------------------------|
| `hipertexto` | `html`   | Elemento raíz del documento                |
| `cabeza`     | `head`   | Contiene metadatos del documento           |
| `titulo`     | `title`  | Título en la pestaña del navegador         |
| `cuerpo`     | `body`   | Contenido visible de la página             |
| `meta`       | `meta`   | Metadatos: charset, viewport, descripción  |
| `estilo`     | `style`  | Estilos CSS incrustados                    |
| `guion`      | `script` | Código JavaScript incrustado o enlazado    |

## Etapa 2 — Estructura visual ✅

| HTES           | HTML5    | Descripción                                  |
|----------------|----------|-----------------------------------------------|
| `encabezado`   | `header` | Cabecera de la página o de una sección         |
| `navegacion`   | `nav`    | Bloque de enlaces de navegación                |
| `principal`    | `main`   | Contenido principal único de la página         |
| `seccion`      | `section`| Sección temática con encabezado propio         |
| `pie-pagina`   | `footer` | Pie de página o de sección                     |
| `division`     | `div`    | Contenedor genérico de bloque                  |
| `parrafo`      | `p`      | Párrafo de texto                               |
| `t1`           | `h1`     | Título de nivel 1                              |
| `t2`           | `h2`     | Título de nivel 2                              |
| `t3`           | `h3`     | Título de nivel 3                              |
| `t4`           | `h4`     | Título de nivel 4                              |
| `t5`           | `h5`     | Título de nivel 5                              |
| `t6`           | `h6`     | Título de nivel 6                              |

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
| `tramo`       | `span` | Contenedor genérico en línea sin semántica  |

## Etapa 5 — Formularios (pendiente)

| HTES           | HTML5      |
|----------------|------------|
| `formulario`   | `form`     |
| `entrada`      | `input`    |
| `boton`        | `button`   |
| `etiqueta`     | `label`    |
| `seleccionar`  | `select`   |
| `opcion`       | `option`   |
| `area-texto`   | `textarea` |

## Regla constitucional

Ningún nombre de etiqueta lleva tilde. Ver el README principal para más
contexto sobre esta decisión.

## ¿Por qué este orden?

Cada etapa solo se agrega cuando la anterior está implementada y probada
en el transpilador. Así el diccionario nunca documenta etiquetas que el
código todavía no soporta.
