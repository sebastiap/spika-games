import React from "react";

function Section(props) {
  return (
    <div className="section">
      <h1>
        <p>Esto es una Seccion de {props.name}</p>
      </h1>
      <img className="section-circle-img" src={props.img} alt={props.name} />
          <p>{props.content}</p>
      
    </div>
  );
}
export default Section;
