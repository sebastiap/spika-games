# Practica con Sitio de Juegos - Spika Games 🧩
Sitio online en Github Pages :
https://sebastiap.github.io/spika-games/

## Conceptos Generales
* Fetch API
* Firebase Database
* localStorage
* Buenas Practicas en Estructura de directorios
* Uso de IA - Tabnine

## Conceptos React
### Conceptos Teoricos
* Contexto - useContext y createContext
* Routes
* Componentes Wrappers(uso de propiedad especial children)
* Componentes Reutilizables(Uso de props)
* Componentes separados por funcionalidad

### Hooks
- useEffect, useState, useRef
* useHistory (Hook de router-dom)
* useContext
* Custom Hooks

## Librerias Externas
* font-Awesome
Para iconos que se ven muy bien.

* React-loading-io
Para los Spinners.

## Pendientes
- [x] localStorage
- [X]  Botones para Secciones
- [X]  Secciones de cada cosa
- [X]  Formato lindo Favoritos
- [ ]  Formato lindo para las secciones
- [ ]  Averiguar como Borrar de firebaseio
- [x] Retoques Finales Pagina Favoritos
- [ ]  CSS en general 

## Opcionales
- [ ] Storage en una BD
- [ ] Backend en Node/Python
- [ ] Herramienta para desarrollo de juegos?


## Problemas Resueltos - General 🐛🦗🐞
### localStorage  
Para evitar que se loguee varias verces, termine ubicandolo en el archivo de contexto. Pense por un momento en aplicarlo en app.js o en la parte de secciones pero demostro ser 
problematico y termine optando por la solucion mas feliz.

## Problemas Resueltos - Github Pages 🐛

### Ejecutar pagina en Github Pages 🦋
Seguir las instrucciones de https://github.com/gitname/react-gh-pages
Ejecutar el siguiente comando para deployar:
~~~
npm run deploy
~~~

### TypeError: MiniCssExtractPlugin is not a constructor 🦋
Originalmente mi repositorio remoto se llamaba github, tuve que agregar una referencia con el nombre origin
~~~
npm i -D --save-exact mini-css-extract-plugin@2.4.5
~~~

### Failed to get remote.origin.url 🦋
Originalmente mi repositorio remoto se llamaba github, tuve que agregar una referencia con el nombre origin
~~~
git remote add origin https://github.com/sebastiap/spika-games.git
~~~

### Imagenes no encontradas 🐜
La solucion mas facil y creo que mas conveniente a la larga , es hacer referencia a la ubicacion de las imagenes en github. Para un server diferente debere apuntar con
una variable PATH.

### Server Local falla luego de configurar GHPAGES 🐜
Por lo visto, algo empezo a fallar localmente, luego de fixear algunos errores menores, me doy cuenta que no es que no anda, si no que tarda unos segundos en renderizar el CSS.
No se si hay solucion para esto o es un bug, pero dado que es solo local y para este proyecto no es un error importante.