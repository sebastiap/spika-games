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
})
  }
  console.log(fContext)
  }

  return (
    <div className={seccion.section}>
      <h1>
        <p>{props.name}</p>
      </h1>
      <img className={seccion.sectioncircleimg}src={props.img} alt={props.name} />
          <p>{props.content} ss</p>
          <button className={seccion.button} onClick={onClickHandler}> {itemIsFavorite?"Quitar de Favoritos":"Agregar a Favoritos"} </button>
          <Link to={"/spika-games/"+ props.link}><button> Ver mas</button></Link>
    </div>
  );
}
export default Section;
