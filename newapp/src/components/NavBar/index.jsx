import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";


export const NavBar = ()=>{
  return (
    <>
    <ul style= {{width: "100%"}}>
      <li>
        <NavLink to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/categoria/films">Muebles</NavLink>
      </li>
      <li>
        <NavLink to="/categoria/series">Accesorios</NavLink>
      </li>
      <li>
        <NavLink to="/contacto">Contacto</NavLink>
      </li>
      
      <li>
      <NavLink to='cart'>Carrito
      <CartWidget/>
      </NavLink>
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