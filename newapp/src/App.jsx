import './App.css';
import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
//import ItemCount from "./components/ItemCount";
//import canasto1 from './assets/canasto1.jpg';
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from "./context/CartContext";


export const CartContext = React.createContext ([])
console.log('CartContext: ', CartContext);

const bodyy = {
    backgroundColor: 'grey',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    
  }

function App() {
  return (
    <>
    
    <BrowserRouter>
      < CartProvider  >
      <NavBar />
      <div style={bodyy}>
      <Routes >
      <Route path='/' element= {<ItemListContainer/>}  />
     <Route path='/categoria/:categoriaId' element= {< ItemListContainer/>} />
     <Route path='/cart' element= {< Cart />}/>
     <Route path='/detalle:detalleId' element= {<ItemDetailContainer/>}/>
     </Routes>
     </div>
   
     </CartProvider>
     </BrowserRouter>
     </>

  );
}

export default App;


