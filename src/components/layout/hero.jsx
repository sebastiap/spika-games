import React from "react";
import Section from "../section";

import heroClass from './hero.module.css';


function Hero(props) {
  var bg = heroClass.background1;
  //Reemplazar por stylos por props
  if (props.background !=="background1" ){
    bg = heroClass.background2;
  }
  
  return (
    // <div className={heroClass.proyectcardshero , bg}>
    <div className={ bg}>
    <h1 className={heroClass.herotitle}>{props.title} </h1>
    <p className={heroClass.herocontent}> {props.content} </p>
      <div className={heroClass.herowrapper}>
      {props.secciones.map(seccion => (<div ><Section id={seccion.id} key={seccion.id} name={seccion.title} img={seccion.img}  content={seccion.description} link={seccion.link} /> </div>))}
      </div>
    </div>
  );
}
export default Hero;