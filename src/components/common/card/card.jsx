import React from "react";
import Avatar from "./avatar";
import Detail from "./detail";

//incorporo esto para renderizar de forma segura
// dangerouslySetInnerHTML no es muy seguro como su nombre lo indica
import DOMPurify from 'dompurify'



function Card(props) {
    var tel = props.tel;
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar pic={props.pic} />
      </div>
      <div className="bottom">
        {/* <Detail info={props.tel} /> */}
        {/* <Detail info={props.mail} /> */}
        <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tel)}}></div>
      </div>
    </div>
  );
}

export default Card;