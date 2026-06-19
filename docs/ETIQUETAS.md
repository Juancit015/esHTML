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

## Etapa 2 — Estructura visual (pendiente)

| HTES           | HTML5    |
|----------------|----------|
| `encabezado`   | `header` |
| `navegacion`   | `nav`    |
| `principal`    | `main`   |
| `seccion`      | `section`|
| `pie-pagina`   | `footer` |
| `division`     | `div`    |
| `parrafo`      | `p`      |
| `t1` a `t6`    | `h1`-`h6`|

## Regla constitucional

Ningún nombre de etiqueta lleva tilde. Ver el README principal para más
contexto sobre esta decisión.

## ¿Por qué este orden?

Cada etapa solo se agrega cuando la anterior está implementada y probada
en el transpilador. Así el diccionario nunca documenta etiquetas que el
código todavía no soporta.
