import React from 'react';
import Img from "./technishal.png"

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5 d-flex">
      <p>&copy; To all Teachers (From- JAY & KRUNAL) </p>
      <img style={{position:"absolute", right:0}} src={Img}  alt="" />
    </footer>
  );
}

export default Footer;
