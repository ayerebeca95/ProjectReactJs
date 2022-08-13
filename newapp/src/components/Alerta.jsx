import React from "react";
//import CartWidget from "../CartWidget";
import "./Alerta.css";

const NavBar = () => {
  return (
    <ul style= {{width: "100%"}}>
      <li>
        <a href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  );
};

export default NavBar;







//AFTER CLASE CON PROFE
/*import "./Alerta.scss";
import Button from "react-boostrap/"
function Alerta() {
    return(
        <div className="alerta-contenedor">
            <p className="alerta-parrafo">parrafo</p>
            <img src="" alt=""/>
            <h1 style={{color:"green"}}>TITULO</h1>
            <Button></Button>
        </div>
    )
}

export default Alerta;*/