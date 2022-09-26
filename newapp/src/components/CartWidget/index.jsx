import React from 'react';
import { useCartContext } from "../../context/CartContext";


export const CartWidget = () =>{
  const {totalProducts} = useCartContext();
  return(
    <>
    <i className="bi bi-cart-fill"></i>{/*LOGO DEL CARRITO*/ }
    <span> {totalProducts()} </span>
    </>
  );
}

export default CartWidget;

//const {totalProducts} = useCartContext();
//<span> {totalProducts() || ""} </span>