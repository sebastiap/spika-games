import React from "react";
import seccion from './section.module.css';

function Section(props) {
  return (
    <div className={seccion.section}>
      <h1>
        <p>{props.name}</p>
      </h1>
      <img className={seccion.sectioncircleimg}src={props.img} alt={props.name} />
          <p>{props.content}</p>
          <button> Favorite </button>
    </div>
  );
}
export default Section;
