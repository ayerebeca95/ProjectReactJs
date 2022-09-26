import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";



export const NavBar = ()=>{
  return (
    <div className= 'container'>
    <ul style= {{width: "100%"}}>
      <li>
        <NavLink className="nav__link" to='/' >
          Home
        </NavLink>
      </li>
      
      <li>
        < NavLink className="nav__link" to='/categoria/piscina' > Piscina</NavLink>
      </li>
      <li>
        <NavLink className="nav__link" to='/categoria/jacuzzi' > Jacuzzi</NavLink>
      </li>
      <li>
      <NavLink className="nav__link" to='cart'>Carrito
      <CartWidget/>
      </NavLink>
      </li>
    </ul>

    </div>
  );
};

export default NavBar;






