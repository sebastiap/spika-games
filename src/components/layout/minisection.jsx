import React from "react";

import heroClass from './minisection.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson,faThumbsUp,faToolbox } from '@fortawesome/free-solid-svg-icons'


function MiniSection(props) {
  return (
    <div className={heroClass.background}>
    <h1 className={heroClass.herotitle}> </h1>
    <p className={heroClass.herocontent}>  </p>
      <div className={heroClass.herowrapper}>
      {/* {props.secciones.map(seccion => (<Link to={seccion.link}><Section key={seccion.id} name={seccion.title} img={seccion.img}  content={seccion.description}/></Link>))} */}
      </div>
      <section className={heroClass.services} id="services">
        <div className={heroClass.maxwidth}>
            <h2 className={heroClass.title}>Nuestro Compromiso</h2>
            <h3 className={heroClass.subtitle}>Los juegos publicados son :</h3>
            <div className={heroClass.servcontent} >
                <div className={heroClass.card}>
                    <div className={heroClass.box}>
                    <FontAwesomeIcon icon={ faThumbsUp} size="3x"/>
                        <div className={heroClass.text}>Gratuito</div>
                        <p>As a Software Engineer who has been working in QA for a long time, I am familiar with the different methodologies and technologies applied to testing.</p>
                    </div>
                </div>
                <div className={heroClass.card}>
                    <div className={heroClass.box}>
                        <FontAwesomeIcon icon={faPerson} size="3x"/>
                        <div className={heroClass.text}>Family Friendly</div>
                        <p>I worked in many projects and in many teams. Sometimes leading the team itself. Actually i am working with a AGILE team developing and implementing apps.</p>
                    </div>
                </div>
                <div className={heroClass.card}>
                    <div className={heroClass.box}>
                        <FontAwesomeIcon icon={faToolbox} size="3x" mask="fa-regular fa-circle"/>
                        <div className={heroClass.text}>Original</div>
                        <p>Programming is my hobby and I love it. Even working in other areas, I always found myself automating or developing some tool that helps us improve our work.</p>
                    </div>
                </div>
               </div>
            </div>
    </section>
    </div>
  );
}
export default MiniSection;