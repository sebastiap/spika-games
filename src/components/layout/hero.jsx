import React from "react";
import { Link } from "react-router-dom";
import Section from "../section";

import heroClass from './hero.module.css';


function Hero() {
  const JsonSecciones = [
    {name:"Proyecto C.A.R.D.S.",img:"https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG",  link:"cards",
    content:"El proyecto CARDS (Cartas Adaptando Remakes Diferenciados Sutilmente) o bien ese proyecto loco de adaptar un juego de mesa popular para poder ser jugado con mazos estandar (Cartas Españoles o Inglesas), nace de ver que muchos juegos se basan unicamente en su diseño para vender."},
    {name:"Proyecto Print and Play",img:"https://cf.geekdo-images.com/mxDYW7LvYooqhjckGmOpIg__itemrep/img/VvYU3G2y8EEuDG-R_WJ5BPfyp2c=/fit-in/246x300/filters:strip_icc()/pic3853918.png", 
    content:"En esta seccion brindaremos informacion sobre print & play gratuitos y pagos", link:"prueba"}, 
    {name:"Coleccion de Juegos Clasicos",img:"https://s1.eestatic.com/2021/09/04/ocio/609450308_205727591_1706x960.jpg",  link:"prueba",
    content:"La mayoría de nosotros tiene en casa una baraja de cartas española, pues no solo es un juego muy económico, sino que resulta especialmente práctico y cómodo a la hora de jugar en cualquier momento y lugar"}
  ]

  return (
    <div className={heroClass.boardgamehero}>
    <h1 className={heroClass.herotitle}>Tu puerta de entrada a los juegos de Mesa</h1>
    <p className={heroClass.herocontent}>Visita nuestros proyectos activos: </p>
      <div className={heroClass.herowrapper}>
      {JsonSecciones.map(seccion => (<Link to={seccion.link}><Section name={seccion.name} img={seccion.img}  content={seccion.content}/></Link>))}
      </div>
    </div>
  );
}
export default Hero;