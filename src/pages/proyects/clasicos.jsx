import React from "react"
import { Link } from "react-router-dom"

const NotFound = () =>
{
    return(
        <div className="Classicpage">
            <h1>Juegos Clasicos</h1>
            <p> Los juegos de nuestra infancia, de nuestros abuelos, los juegos de siempre.</p>
            {/* <img src="https://http.cat/404" alt="Hidden Cat"/> */}
            {/* <p> <Link to="/spika-games/">Volver al home </Link></p> */}
        </div>
    );
};

export default NotFound;