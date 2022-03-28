import React from "react";
import { Link } from "react-router-dom";

import headerClasses from './header.module.css'

function Header() {
  return (
    <header className={headerClasses.header}>
    <div>
    <Link to="/">
    <img width="200" height="70" src="/img/LogoSpikagames.png" class="custom-logo" alt="TORI games" srcset="/img/LogoSpikagames.png 200w, /img/LogoSpikagames.png 300w, 
    /img/LogoSpikagames.png 1024w, /img/LogoSpikagames.png 768w, /img/LogoSpikagames.png 600w, 
    /img/LogoSpikagames.png 64w, /img/LogoSpikagames.png 1037w" sizes="(max-width: 200px) 100vw, 200px"></img>
    </Link>
    </div>
    <div>  
    <ul>
      <li><Link to="/"> Home</Link></li>
      <li><Link to="/top"> Top Games</Link></li>
      <li><Link to="/blog"> Blogs </Link></li>
      <li><Link to="/other"> Misc</Link></li>
    </ul>
      
      
      
      
    </div>
    </header>
  );
}
export default Header;
