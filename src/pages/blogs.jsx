import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import Hero from '../components/layout/hero'
import {Eclipse} from "react-loading-io";

function BlogPage() {
  const history = useHistory();
  const [isloading,setIsLoading] = useState(true);
  const [loadedBlogs,setloadedBlogs] = useState([]);


//useEffect permite correr cierto codigo bajo ciertas condiciones
// Si yo en este caso usara solo useState, entro en un loop infinito, ya que cada vez que actualizo empiezo de nuevo y el fetch lo hace siempre que inicio esta funcion
useEffect(
  //el primer argunmento es una funcion
() => {
    setIsLoading(true);
    //fetcheo de datos de firebase
    // no pongo el segundo parametro porque por default es get el metodo de fetch
    // IMPORTANTE: EN POST NO NOS INTERESA LA RESPUESTA PERO EN GET SI
    fetch("https://spika-games-default-rtdb.firebaseio.com/blogs.json"
    ).then(
      (response)=>{
        // Con la respuesta que obtengo, la parseo con el metodo integrado JSON
        return response.json();
        // Pero OJO , como json devuelve tambien una promesa, debo devolverlo con Return y hacer un then aca
      }).then(data => {
        const blogs = [];

        for (const key in data) {
          const article = {
            id:key,
            // spread operator para pasar el contenido del objeto con esa key
            ...data[key]
          }
          blogs.push(article);

        }


        setIsLoading(false);
        // cuando hacemos el Fetch no obtenemos un array sino un JSON
        setloadedBlogs(blogs);
        //Podemos agregar error handling
      })
      //termina primer argumento
    }
// el segundo argumento es un array de dependencias
// Si dejo el array vacio, correra una sola vez
// si no completo el segundo parametro se va a correr siempre que se cargue este componente . No seria diferente a correr el codigo en el componente
// Si dentro del array pongo el nombre de una variable, verificara cambios en la variable para volver a ejecutar
// solo deberia usarlo si tengo valores externos, no es el caso. 
// Si por ejemplo sacaramos un dato de props o una url si deberia indicar esta dependencia
  ,[])
  
  // Esto termina en una funcion aparte, porque como son promesas necesito hacer un pedido asincrono.
  // no puedo usar la funcion del componente React de este modo (poniendo async) ya que los componentes de React tienen que ser Sincronicos
  if (isloading) {
    return <div className="centrado">
    <Eclipse/>
    <img src="https://github.com/sebastiap/spika-games/blob/gh-pages/img/BeanEater.svg?raw=true" alt="Comecocos2"></img>
    </div>
}

  return (

    <div >
      <Hero secciones={loadedBlogs} tipo="blogs" title="Ultimos Articulos" content="Lee los mas interesantes articulos:" background="background2"/>
    </div>
  );
}
export default BlogPage;

