# Cómo contribuir

## Proponer una nueva etiqueta

1. Revisa [`docs/ETIQUETAS.md`](ETIQUETAS.md) para confirmar que no existe ya.
2. Verifica que el nombre en español **no lleve tilde** (regla obligatoria
   del proyecto — ver README).
3. Abre un Issue en GitHub describiendo:
   - Nombre HTES propuesto
   - Etiqueta HTML5 equivalente
   - Por qué ese nombre y no otro (si hay ambigüedad)

## Reportar un error del transpilador

Abre un Issue con:
- El archivo `.htes` que usaste (o un fragmento mínimo que reproduce el error)
- Qué esperabas que generara
- Qué generó en realidad

## Estructura del código

- `transpilador.js` — punto de entrada, lee el archivo y orquesta el proceso
- `src/diccionario.js` — única fuente de verdad de las etiquetas soportadas

Si quieres agregar una etapa nueva de etiquetas, el diccionario es el único
archivo que debería necesitar cambios estructurales grandes; el motor del
transpilador está diseñado para no saber cuántas etiquetas existen.
