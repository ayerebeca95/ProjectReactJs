import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";


function NavBar ({titulo, comision, color}){
  return (
    <>
      <h1 style={{background:color}}> {titulo} {comision} {color} </h1>
 
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
      <CartWidget/>
    </ul>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A optio nemo, incidunt exercitationem molestias cumque perspiciatis quas doloremque quasi rerum delectus facere, sint quis, ipsam consequuntur et tempora officia sunt?</p>
    
    </>
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