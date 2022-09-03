import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from './components/Cart';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
//import ItemCount from "./components/ItemCount";
//import canasto1 from './assets/canasto1.jpg';
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {
  return (
    <>
    
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element= {<ItemListContainer/>}/>
     <Route path='/categoria/:categoriaId' element= {< ItemListContainer/>} />
     <Route path='/cart' element= {< Cart />}/>
     <Route path='/detalle:detalleId' element= {<ItemDetailContainer/>}/>
     </Routes>
     </BrowserRouter>
     </>

  );
}

export default App;


