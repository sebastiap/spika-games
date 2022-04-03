import React from "react";
import { Link } from "react-router-dom";
import Section from "../section";

import heroClass from './hero.module.css';


function Hero(props) {
  var bg = heroClass.background1;
  //Reemplazar por stylos por props
  if (props.background !=="background1" ){
    bg = heroClass.background2;
  }
  
  return (
    <div className={heroClass.boardgamehero, bg}>
    <h1 className={heroClass.herotitle}>{props.title} </h1>
    <p className={heroClass.herocontent}> {props.content} </p>
      <div className={heroClass.herowrapper}>
      {props.secciones.map(seccion => (<Link to={seccion.link}><Section key={seccion.id} name={seccion.name} img={seccion.img}  content={seccion.content}/></Link>))}
      </div>
    </div>
  );
}
export default Hero;