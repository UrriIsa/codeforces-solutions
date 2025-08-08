# Codeforces Solutions

Este repositorio contiene soluciones a problemas de Codeforces, organizadas por dificultad y división. En mi perfil se puede observar un link hacia mi perfil de [Codeforces](https://codeforces.com/profile/Urri), 
pero de igual manera puedes hacer click. La realización de estos inicia en el segundo semestre de mi licenciatura. La soluciones se registran en un archivo JSON para facilitar el acceso y la búsqueda. Puede que las divisiones estén mal, sin embargo, están las soluciones de los ejercicios.

***Traduction :***

This repository contains solutions to Codeforces problems, organized by difficulty and division. In my profile you can see a link to my [Codeforces](https://codeforces.com/profile/Urri), 
but you can click on it anyway. The realization of these starts in the second semester of my bachelor's degree. The solutions are recorded in a JSON file for easy access and search. The divisions may be wrong, however, there are the solutions to the exercises.

---

## Table of Contents

- [Estructura / Structure](#estructura--structure)
- [Cómo Usarlo / How tu use](#cómo-usarlo--how-to-use)
    - [Archivo `soluciones.json` / File `soluciones.json`](#archivo-solucionesjson--file-solucionesjson)
- [Contribuciones y Mejoras / Contributions and Improvements](#contribuciones-y-mejoras--contributions-and-improvements)
- [Licencia / License](#licencia--license)


---

## Estructura / Structure

La estructura es muy sencilla, dentro del repositorio existen disntintas carpetas que indican la división y nivel de los problemas que se pueden encontrar ahí. En general variarían los lenguajes con los que se resuelven. 

***Traduction :*** 

The structure is very simple, within the repository there are different folders that indicate the division and level of the problems that can be found there. In general, the languages with which they are solved vary.

```plaintext
codeforces-solutions/
├─ soluciones/
│  ├─ Div2_A/        # Soluciones de problemas de la división 2, nivel A
│  └─ Div3_B/        # Soluciones de problemas de la división 2, nivel B
│
├─ scripts/
│  └─ genSols.js     # Generador de JSON
│
├─ soluciones.json   # Lista de soluciones
|
└─README.md          # Documentación del repositorio
```

### Archivo `soluciones.json` / File `soluciones.json`

Este archivo contiene información sobre cada problema resuelto, incluyendo su **ID**, **título**, **etiquetas** y la ruta de la solución en el repositorio. Ejemplo de estructura:

***Traduction :*** 

This file contains information about each solved problem, including its **ID**, **title**, **tags** and the path to the solution in the repository. Example structure:


```json
[
  { "id": "228A", "title": "Is your horseshoe on the other hoof?", "tags": ["implementation", "*800"], "solution": "Div2_A/228A.c" },
]
```

---

## Cómo Usarlo / How to use

1. Usa `soluciones.json` para identificar el problema asociado a cada archivo.
2. Explora la carpeta que desees para ver las soluciones.
3. Si deseas agregar una nueva solución:
   - Guarda el código en la carpeta correspondiente.
   - Corre el archivo scripts/genSols.js para actualizar las entradas de `soluciones.json`
  
***Traduction :*** 

1. Use `soluciones.json` to identify the problem associated with each file.
2. Browse the folder of your choice to view the solutions.
3. If you want to add a new solution:
   - Save the code in the appropriate folder.
   - Run the scripts/genSols.js file to update the entries in `soluciones.json`.


---

## Contribuciones y Mejoras / Contributions and Improvements

Si deseas contribuir:
- Puedes agregar nuevas soluciones siguiendo la estructura del repositorio.
- Se recomienda que cada archivo tenga comentarios explicativos sobre la solución implementada.
- Si encuentras errores o mejoras en las soluciones, abre un _pull request_ o deja un comentario.

***Traduction :*** 

If you wish to contribute:
- You can add new solutions following the repository structure.
- It is recommended that each file has explanatory comments about the implemented solution.
- If you find bugs or improvements in the solutions, open a _pull request_ or leave a comment.


---

## Licencia / License
Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo [LICENCIA](LICENCIA) para obtener más información.

***Traduction :***
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


