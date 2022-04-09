import React from "react";
import Hero from "../components/layout/hero"
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import Section from "../components/section";




function MyFavorites() {
  const myFavs = useContext(FavoritesContext);

  let content ;

  if (myFavs.total === 0) {
    content = "You have no Favorites";
  }
  else {
    content = 
    <Hero secciones={myFavs.favorites} title="Mis Favoritos" content="Estos son los articulos que te encantan:" background="background2"/>
  }


  return (

    <div>
    {myFavs.favorites.map(seccion => (<div ><Section id={seccion.id} key={seccion.id} name={seccion.name} img={seccion.img}  content={seccion.content}/> </div>))}
    </div>
  );
}
export default MyFavorites;
