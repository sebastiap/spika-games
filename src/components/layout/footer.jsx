import React from "react";
import footerClasses from './footer.module.css'

const anio = new Date().getFullYear();
function Footer() {
  return (
    <div>
      <div style={{marginTop: "3%"}}>
      </div>
    <footer className={footerClasses.footer}>
      <p>Copyright© {anio} by Sebastian Picardi</p>
    </footer>
    </div>
  );
}

export default Footer;
