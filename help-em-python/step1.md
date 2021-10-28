# Ejercicio 1

Soy el nuevo **Desarrollador FullStack Trainee** de Walmart Chile, me pidieron hacer un algoritmo sencillo que reciba una palabra y que retorne la posición del primer caracter que no se repite. En caso de no encontrar ninguno, debo retornar -1.

No estoy seguro de si lo que hice en pseudocodigo esté bien. Me **enseñarías** a programarlo?

```json
obtenerPosicionPrimerCaracterUnico(palabra) {
    desde posicion = 1 hasta largo(palabra) {
        frecuenciaCaracter = 1
        desde posPivote = 1 hasta largo(palabra) {
            si palabra.obtenerCaracter(posicion) = palabra.obtenerCaracter(posPivote)
                frecuenciaCaracter = frecuenciaCaracter + 1
            si frecuenciaCaracter = 1 {
                retornar posicion
            }
        }
    }
    retornar -1
}
```

ej: babilonia -> primer caracter único es "l", por lo tanto, debe retornar 5

## Requerimientos:

1. Se requiere programar el algoritmo solicitado, con ayuda del pseudocodigo proporcionado.
2. Si es posible, mejorar dicho algoritmo (una vez programado).
3. Realiza todos los pasos que estimes conveniente, asumiendo que éste código estará en producción el dia mañana.
4. Tienes la libertad de utilizar el mecanismo que prefieras para poder comprobar el funcionamiento de tu código.
