# Respuestas de Sustentación

## Pregunta 1
**¿Qué ventaja tiene usar TypeScript y definir la clase Serie en lugar de usar objetos literales genéricos (any) como lo haríamos en JavaScript puro al iterar la tabla?**

La ventaja principal es la **seguridad de tipos**. Al definir la clase Serie con tipos específicos (id: number, name: string, etc.), el compilador de TypeScript detecta errores antes de ejecutar el código. Por ejemplo, si intentamos acceder a una propiedad que no existe o asignamos un valor del tipo incorrecto, TypeScript nos avisa inmediatamente. Esto previene bugs en producción y hace el código más fácil de entender y mantener.

## Pregunta 2
**En tu función que calcula el promedio, ¿por qué es recomendable usar variables let para el acumulador de la suma y const para el arreglo de datos?**

- **let** para el acumulador (`totalSeasons`): porque su valor cambia en cada iteración del forEach, necesitamos una variable mutable.
- **const** para el arreglo (`dataSeries`): porque el arreglo en sí no cambia, siempre apunta al mismo conjunto de datos. Usar const indica que esta referencia es inmutable, lo cual previene reasignaciones accidentales.

## Pregunta 3
**¿Qué pasaría en tiempo de compilación si intentas asignar el valor "cinco" al atributo seasons de una Serie en el archivo data.ts?**

TypeScript mostraría un **error de compilación** indicando que el tipo "string" no es asignable al tipo "number". El mensaje sería algo como: `Type '"cinco"' is not assignable to type 'number'`. El código no compilaría hasta que se corrija el error, previniendo así que llegue a producción.