import React from "react";
import { Link } from "react-router-dom";

import headerClasses from './header.module.css'

function Header() {
  return (
    <header className={headerClasses.header}>
    <div>
    <Link to="/">
    <img width="200" height="70" srcSet="https://github.com/sebastiap/spika-games/blob/gh-pages/img/LogoSpikagames.png?raw=true" alt="TORI games" sizes="(max-width: 200px) 100vw, 200px"></img>
    </Link>
    </div>
    <div>  
    <ul>
      <li><Link to="/spika-games/"> Home</Link></li>
      <li><Link to="/spika-games/top"> Top Games</Link></li>
      <li><Link to="/spika-games/blog"> Blogs </Link></li>
      <li><Link to="/spika-games/other"> Misc</Link></li>
    </ul>
      
      
      
      
    </div>
    </header>
  );
}
export default Header;
