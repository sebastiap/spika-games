import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import Hero from '../components/layout/hero'
import BlogForm from "../components/common/blog/BlogForm"

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
//solo deberia usarlo si tengo valores externos, no es el caso. 
// Si por ejemplo sacaramos un dato de props o una url si deberia indicar esta dependencia
  ,[])
  
  // Esto termina en una funcion aparte, porque como son promesas necesito hacer un pedido asincrono.
  // no puedo usar la funcion del componente React de este modo (poniendo async) ya que los componentes de React tienen que ser Sincronicos
  if (isloading) {
    return <div>Loading...</div>
}


  const AddnewLog = (newPostData) => {

    // Utilizo el Hook useHistory para navegar el virtual DOM.

    //Funcion estandar de Javascript
    //El primer parametro de Fetch es la URL donde hacer el POST
    // La primera parte , https://spika-games-default-rtdb.firebaseio.com/ , la saque de Firebase , de la base recien creada
    // al agregarle blogs, le estoy pidiendo que cree una tabla o coleccion llamada "blogs"
    // Firebase exije que la URL termine con json para hacer esta insersion
    fetch("https://spika-games-default-rtdb.firebaseio.com/blogs.json",
    // Por default, Fetch envia un GET, tengo que agregar el segundo argumento para cambiar esto
    {method:"POST",
    body: JSON.stringify(newPostData),
    headers:{
      "Content-Type": "application/json",
    } // en body paso los datos en formato JSON
    }
    // Puedo agregar cacheo de errores

    //Agrego then para ejecutar accions posteriores a la respuesta del fetch
    ).then(()=>{
    //utilizo replace en lugar de push, para ir a una nueva pagina y que no este la opcion de volver atras
    // a replace le paso como parametro una ruta, no permite usar el navegador para volver para atras
    history.replace('/');
  })
  }

  return (

    <div >
    <img   src="BeanEater.svg"alt="Comecocos" />
    <img   src="https://github.com/sebastiap/spika-games/blob/gh-pages/img/BeanEater.svg"alt="Comecocos2" /> 
        {/* {loadedBlogs.map(articulo => (<Link to={"/spika-games/blogs/" + articulo.Address}><Section key={articulo.id} name={articulo.title} img={articulo.img}  content={articulo.description}/></Link>))}
      <div className="example">
      {<BlogDetails title={"demoArticle.content"} img={"demoArticle.img"} content={"demoArticlecontent"} />} */}
      <Hero secciones={loadedBlogs} title="Ultimos Articulos" content="Lee los mas interesantes articulos:" background="background2"/>
      <BlogForm onAddNewLog={AddnewLog}/>
    </div>
  );
}
export default BlogPage;

