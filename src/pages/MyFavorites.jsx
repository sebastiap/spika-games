import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import Section from "../components/section";

function MyFavorites() {
  const myFavs = useContext(FavoritesContext);

  let content ;

  if (myFavs.total === 0) { 
    content = <div className="notfound" style={{margin: 0}}>
    <h1>"Todavia no agregaste nada a Favoritos!"</h1>
    <p> Revisa nuestros articulos para ver cuales son tus preferidos!</p>
    </div>
  }
  else {
    content = myFavs.favorites.map(seccion => (<div ><Section id={seccion.id} key={seccion.id} name={seccion.name} img={seccion.img}  content={seccion.content}/> </div>))
  }


  return (

    <div >
     {content}
    </div>
  );
}
export default MyFavorites;
