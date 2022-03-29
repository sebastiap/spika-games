import React from "react";
import Hero from "../layout/hero";
import BlogForm from "../common/blog/BlogForm"
import ContentWrapper from "../common/ui/contentWrapper";
// import useFetch2 from "../common/useFetch2";

function BlogPage() {
  // const { error, isPending, data: data } = useFetch2('https://api.boardgameatlas.com/api/search?limit=20&client_id=JLBr5npPhV')
  // console.log(data.games)
  return (

    <div >
      <Hero secciones={[]} title="Publica un nuevo articulo!" content="Tu aporte es bienvenido" background="background1" />
      <BlogForm/>
      {/* <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
      {<BlogList/>} */}
    </div>
  );
}
export default BlogPage;

