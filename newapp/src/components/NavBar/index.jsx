import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";


function NavBar ({titulo, comision, color}){
  return (
    <>
     {/* <h1 style={{background:color}}> {titulo} {comision} {color} </h1>*/}
 
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
      <li>
      <CartWidget/>
      </li>
    </ul>
    <p>
Mi Casa Revista <br />
Los accesorios más prácticos para poner orden en casa - </p>
    
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