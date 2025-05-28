# Codeforces Solutions

Este repositorio contiene soluciones a problemas de Codeforces, organizadas por dificultad y división. En mi perfil se puede observar un link hacia mi perfil de [Codeforces](https://codeforces.com/profile/Urri), 
pero de igual manera puedes hacer click. La realización de estos inicia en el segundo semestre de mi licenciatura. La soluciones se registran en un archivo JSON para facilitar el acceso y la búsqueda.


---

## Table of Contents

- [Estructura / Structure](#estructura--structure)
- [Cómo Usarlo / How tu use](#cómo-usarlo--how-to-use)
    - [Archivo `solutions.json`](#archivo-solutionsjson)
- [Contribuciones y Mejoras / Contributions and Improvements](#contribuciones-y-mejoras--contributions-and-improvements)
- [Licencia / License](#licencia--license)


---

## Estructura / Structure

La estructura es muy sencilla, dentro del repositorio existen disntintas carpetas que indican la división y nivel de los problemas que se pueden encontrar ahí. En general variarían los lenguajes con los que se resuelven.

```plaintext
codeforces-solutions/
│── Div2_A/            # Soluciones de problemas de la división 2, nivel A
│── solutions.json     # Archivo con metadata de los problemas resueltos
│── README.md          # Documentación del repositorio
```

### Archivo `solutions.json`

Este archivo contiene información sobre cada problema resuelto, incluyendo su **ID**, **título**, **etiquetas** y la ruta de la solución en el repositorio. Ejemplo de estructura:

```json
[
  { "id": "228A", "title": "Is your horseshoe on the other hoof?", "tags": ["implementation", "*800"], "solution": "Div2_A/228A.c" },
]
```

---

## Cómo Usarlo / How to use

1. Usa `solutions.json` para identificar el problema asociado a cada archivo.
2. Explora la carpeta que desees para ver las soluciones.
3. Si deseas agregar una nueva solución:
   - Guarda el código en la carpeta correspondiente.
   - Añade una nueva entrada en `solutions.json`, respetando el formato.


---

## Contribuciones y Mejoras / Contributions and Improvements

Si deseas contribuir:
- Puedes agregar nuevas soluciones siguiendo la estructura del repositorio.
- Se recomienda que cada archivo tenga comentarios explicativos sobre la solución implementada.
- Si encuentras errores o mejoras en las soluciones, abre un _pull request_ o deja un comentario.


---

## Licencia / License
Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo [LICENCIA](LICENCIA) para obtener más información.

***Traduction :***
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
