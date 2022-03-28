import React from "react";
import footerClasses from './footer.module.css'

const anio = new Date().getFullYear();
function Footer() {
  return (
    <footer className={footerClasses.footer}>
      <p>Copyright© {anio} by Sebastian Picardi</p>
    </footer>
  );
}

export default Footer;
