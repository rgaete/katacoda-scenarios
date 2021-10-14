# Exercise 1

Soy el nuevo **dev junior** de Walmart Chile, me pidieron hacer un algoritmo sencillo que reciba una palabra y que retorne la posición del caracter que no se repite. En caso de no encontrar niguno, debo retornar -1.

No estoy seguro de si lo que hice esté bien. Me **enseñarías** a programarlo?

```json
obtenerPosicionPrimerCaracterUnico(palabra) {
    desde posicion = 1 hasta largo(palabra) {
        // Iniciar en 1 para inducir error
        frecuenciaCaracter = 0
        desde posPivote = 1 hasta largo(palabra) {
            si palabra.obtenerCaracter(posicion) = palabra.obtenerCaracter(posPivote)
                frecuenciaCaracter = frecuenciaCaracter + 1
        }
        // Mover este bloque antes de la linea anterior (al final del bucle anidado) para inducir error
        si frecuenciaCaracter = 1 {
            retornar posicion
        }
    }
    retornar -1
}
```

ej: babilonia -> primer caracter único es "l", por lo tanto, debe retornar 5


## Requerimientos:

1. Se requiere programar el algoritmo solicitado, con ayuda del pseudocodigo proporcionado.
2. Si es posible, mejorar dicho algoritmo (una vez programado) para que tenga la menor complejidad ciclomatica posible.

## Pauta entrevistador

* Debe explicar lo que está haciendo, como si estuviera enseñando a una persona junior.
* Si no entiende cosas, debe preguntar. Si asume algo errado sin preguntar, pierde ptos.
* Para comprobar si funciona o no el algoritmo, puede usar console.log()
* Si agrega unit tests para comprobar, obtendrá ptos adicionales
* Si realiza TDD, obtendrá más ptos adicionales
