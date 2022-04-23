import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import Section from "../components/section";

function MyFavorites() {
  const myFavs = useContext(FavoritesContext);

  let title ="" ;
  let content ;

  if (myFavs.total === 0) { 
    content = <div className="notfound">
    <div>
    <h1>"Todavia no agregaste nada a Favoritos!"</h1>
    <p> Revisa nuestros articulos para ver cuales son tus preferidos!</p>
    </div>
    </div>
  }
  else {
    title = <div className="notfound" >
    <div>
    <h1>Estos son tus articulos favoritos</h1>
    <p> Revisa nuestros articulos para agregar mas!</p>
    </div>
    </div>
    content = myFavs.favorites.map(seccion => (<div className="cardfav" ><Section id={seccion.id} key={seccion.id} name={seccion.name} img={seccion.img}  content={seccion.content}/> </div>))
  }


  return (

    <div className="favs">
     {title}
     {content}
    </div>
  );
}
export default MyFavorites;
