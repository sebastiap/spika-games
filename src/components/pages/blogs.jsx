import React from "react";
import BlogList from "../common/blogList";
// import useFetch2 from "../common/useFetch2";

function BlogPage() {
  // const { error, isPending, data: data } = useFetch2('https://api.boardgameatlas.com/api/search?limit=20&client_id=JLBr5npPhV')
  // console.log(data.games)
  return (

    <div>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Trayendo Juegos...</div> } */}
      <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
      {<BlogList/>}
    </div>
  );
}
export default BlogPage;
