import React from "react";
import { useHistory } from "react-router-dom";
import BlogForm from "../components/common/blog/BlogForm"

function NewBlog() {
  const history = useHistory();

  const AddnewBlog = (newPostData) => {

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
    history.replace('/spika-games/');
  })
  }

  return (

    <div >
    <div className="blogs">
     <h1> Nuevo articulo: </h1>
    </div>
      <BlogForm onAddNewLog={AddnewBlog}/>
    </div>
  );
}
export default NewBlog;

