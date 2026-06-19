# Plan de etapas

Este proyecto se construye por etapas pequeñas. Cada etapa termina con algo
que de verdad puedes correr y ver funcionando en el navegador — nunca código
a medias.

## ✅ Etapa 1 — El esqueleto
7 etiquetas: `hipertexto`, `cabeza`, `titulo`, `cuerpo`, `meta`, `estilo`, `guion`.
Sin atributos. Reemplazo simple de texto.
**Meta lograda:** transpilar una página mínima válida.

## ✅ Etapa 2 — Estructura visual
8 etiquetas: `encabezado`, `navegacion`, `principal`, `seccion`, `pie-pagina`,
`division`, `parrafo`, `t1`-`t6` (en realidad 13 etiquetas contando cada
nivel de título por separado).
**Meta lograda:** una página con secciones visibles, texto real y anidación
de etiquetas funcionando correctamente.

⚠️ **Nota técnica descubierta en esta etapa:** el transpilador reemplaza
texto sin distinguir si está dentro de una etiqueta real o dentro de un
bloque de `<estilo>`/CSS. Por ahora no causa problemas porque nuestras
etiquetas no coinciden con nombres comunes de clases CSS, pero es algo a
resolver antes de la Etapa 5.

## ✅ Etapa 3 — Atributos básicos
El salto técnico importante. El transpilador dejó de ser "buscar y
remplazar" puro de etiquetas y ahora también entiende pares
`nombre=valor` dentro de una etiqueta: `clase=`, `ruta=` (href),
`fuente=` (src), `alt=`.
**Meta lograda:** enlaces (`<enlace ruta="...">`) e imágenes
(`<imagen fuente="..." alt="...">`) que funcionan de verdad.

**Cómo funciona en el código:** el transpilador ahora corre dos pasadas.
Primero traduce los atributos (busca `clase=` en cualquier parte y lo
cambia a `class=`), y *después* traduce las etiquetas. El orden importa:
si tradujéramos las etiquetas primero, `ruta=` dentro de `<enlace>` ya
estaría dentro de una etiqueta `<a>`, pero el atributo seguiría sin
traducir si no hacemos ambos pasos.

## ⬜ Etapa 4 — Listas, enlaces e imágenes
6 etiquetas: `enlace`, `imagen`, `lista`, `lista-ord`, `elemento`, `tramo`.
Usa los atributos de la Etapa 3 en la práctica.
**Meta:** un blog o portafolio simple, completo y navegable.

## ⬜ Etapa 5 — Formularios
8 etiquetas: `formulario`, `entrada`, `boton`, `etiqueta`, `seleccionar`,
`opcion`, `area-texto`, `tabla`.
La parte más compleja: muchos atributos por etiqueta.
**Meta:** un formulario de contacto funcional.

## ⬜ Etapa 6 — Documentación y publicación
README completo, spec pública de cada etiqueta, repositorio listo para
que otros desarrolladores contribuyan.

---

¿Por qué este orden y no otro? Cada etapa solo introduce **un** concepto
nuevo de complejidad a la vez: primero etiquetas sin atributos, después
estructura, después atributos, después casos de uso reales. Así nunca te
enfrentas a dos problemas nuevos al mismo tiempo.
