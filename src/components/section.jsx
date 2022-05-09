import React,{useContext} from "react";
import seccion from './section.module.css';

import FavoritesContext from "../store/favorites-context";
import { Link } from "react-router-dom";


function Section(props) {
  const fContext = useContext(FavoritesContext);
  const itemIsFavorite = fContext.isFavorite(props.id);

  function onClickHandler() {
  if (itemIsFavorite) {
    fContext.removeFavorite(props.id)
  }
  else {
fContext.addFavorite({
  id:props.id,
  name:props.name,
  img:props.img,
  content:props.content,
  blog:props.blog,
  link:props.link
})
  }}

  const deleteBlog = () => {
    // averiguar como Borrar de firebaseio
    // fetch("https://spika-games-default-rtdb.firebaseio.com/blogs/"+ "-N-5b4AhxfBpIrFZpHes",
    // {method:"DELETE",
    // headers:{
    //   "Content-Type": "application/json",
    // } 
    // })
  }

  return (
    <div className={seccion.section}>
      <h1>
        <p>{props.name}</p>
      </h1>
      <img className={seccion.sectioncircleimg}src={props.img} alt={props.name} />
          <p>{props.content} </p>
          <button className={seccion.button} onClick={onClickHandler}> {itemIsFavorite?"Quitar de Favoritos":"Agregar a Favoritos"} </button>
          {props.blog?<button className={seccion.button} onClick={deleteBlog}> Borrar Articulo </button>:<></>}
          {props.blog?
          <Link to={{pathname:"/spika-games/"+ props.link,state:{title:props.name,img:props.img,content:props.content}}}  ><button style={{textDecoration:"none"}}> Ver mas</button></Link>
          :<Link to={"/spika-games/"+ props.link} title="pruebatitulo"><button style={{textDecoration:"none"}}> Ver mas</button></Link>}
    </div>
  );
}
export default Section;
