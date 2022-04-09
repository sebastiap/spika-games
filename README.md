# Practica con Sitio de Juegos - Spika Games 🧩


## Conceptos

* Hooks
** useEffect, useState, useRef
** useHistory (Hook de router-dom)
** useContext
** Custom Hooks
* Routes

* Fetch API
* Firebase Database

* Contexto
** useContext
** createContext

* Componentes Wrappers(uso de propiedad especial children)
* Componentes Reutilizables(Uso de props)
* Componentes separados por funcionalidad
* Estructura de directorios

## Librerias
* font-Awesome
Para iconos que se ven muy bien.
* React-loading-io
Para los Spinners.

## Problemas Resueltos - General 🐛🦗🐞
### 

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