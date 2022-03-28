import { div } from "prelude-ls"
import React from "react"
import { Link } from "react-router-dom"

const NotFound = () =>
{
    return(
        <div className="hero-title">
            <h2>Pagina no encontrada</h2>
            <p> Esa pagina no puede encontrarse</p>
            <img src="https://http.cat/404"/>
            <p> <Link to="/">Volver al home </Link></p>
            <p> .</p>
        </div>
    );
};

export default NotFound;