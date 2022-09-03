import React , {useEffect, useState} from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import { useParams } from "react-router-dom";


const films = [
  {id: 1, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jarrones-tonos-tierra-1604668041.jpg?crop=1.00xw:0.892xh;0,0.0798xh&resize=1200:*", category:"series",  title: "canasta"},
  {id: 2, image:"https://i.pinimg.com/736x/a5/c7/82/a5c7823b3dc6003b81c969ac067e680e.jpg", category:"series", title: "botella de adorno"},
  {id: 3, image: "https://casa-web.com.ar/wp-content/uploads/2013/07/alfombras-alegres-para-pisos-oscuros-768x768.jpg", category:"films",  title: "alfombra"}
];




export const ItemListContainer = ({texto}) =>{
const [data, setData] = useState ([]);

const {categoriaId} = useParams();

useEffect(() => {
  const getData = new Promise(resolve => {
    setTimeout (() => {
      resolve(films);
    },1000)
  });
  if (categoriaId){
  getData.then(res =>setData(res.filter(film => film.category === categoriaId)));
 } else {
  getData.then(res => setData(res))
}

}, [categoriaId])
  const onAdd = (quantity) => {
    alert(`Se agregó al carrito ${quantity} unidades`);
  }
  return(
    <>
    
     <Title greeting={texto} />
     <ItemCount initial={1} stock={5} onAdd={onAdd} />
     <ItemList data={data} />
     </>
  );
}

export default ItemListContainer;