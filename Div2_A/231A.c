#include <stdio.h>

int main() {
    int n; // número de personas
    int prob = 0; // problemas que pueden solucionar

    // leemos cuantos problemas se checarán.
    scanf("%d", &n);
    
    // Leemos las respuestas de cada persona
    for (int i = 0; i < n; i++) {
        int a, b, c;
        // Lectura de las respuestas de cada persona
        scanf("%d %d %d", &a, &b, &c);
        
        // Contamos cuántos "1" hay en las respuestas
        int respuestasPositivas = a + b + c;
        
        // Si hay al menos 2 respuestas positivas, cuenta como un equipo
        if (respuestasPositivas >= 2) {
            prob++;
        }
    }
    
    // Imprimimos el número de equipos
    printf("%d\n", prob);
    return 0;
}
