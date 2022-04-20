import React from "react";
import Avatar from "./avatar";
import classes from './card.module.css';

//incorporo esto para renderizar de forma segura
// dangerouslySetInnerHTML no es muy seguro como su nombre lo indica
import DOMPurify from 'dompurify'

function Card(props) {
    var tel = props.tel;
  return (
    <div className={classes.proyect}>
    <div className={classes.whitecard}>
      <div className={classes.top}>
        <h2 className="name">{props.name}</h2>
        {/* <Avatar pic={props.pic} /> */}
      </div>
      <div className={classes.bottom}>
        {/* <Detail info={props.tel} /> */}
        {/* <Detail info={props.mail} /> */}
        <div className={classes.content} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tel)}}></div>
      </div>
    </div>
    </div>
  );
}

export default Card;