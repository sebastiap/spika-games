import React from "react";
import Hero from '../components/layout/hero'
import BlogForm from "../components/common/blog/BlogForm"
import ContentWrapper from "../components/common/ui/contentWrapper";
// import useFetch2 from "../common/useFetch2";

function BlogPage() {

  const AddnewLog = (newPostData) => {
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
    )
  }



  return (

    <div >
      <Hero secciones={[]} title="Publica un nuevo articulo!" content="Tu aporte es bienvenido" background="background1" />
      <BlogForm onAddNewLog={AddnewLog}/>
      {/* <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
      {<BlogList/>} */}
    </div>
  );
}
export default BlogPage;

