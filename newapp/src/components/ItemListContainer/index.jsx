import React , {useEffect, useState} from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';


const films = [
  {id: 1, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jarrones-tonos-tierra-1604668041.jpg?crop=1.00xw:0.892xh;0,0.0798xh&resize=1200:*", title: "canasta"},
  {id: 2, image:"https://i.pinimg.com/736x/a5/c7/82/a5c7823b3dc6003b81c969ac067e680e.jpg", title: "botella de adorno"},
  {id: 3, image: "https://casa-web.com.ar/wp-content/uploads/2013/07/alfombras-alegres-para-pisos-oscuros-768x768.jpg", title: "alfombra"}
];




export const ItemListContainer = ({texto}) =>{
const [data, setData] = useState ([]);

useEffect(() => {
  const getData = new Promise(resolve => {
    setTimeout (() => {
      resolve(films);
    },3000)
  });
  getData.then(res => setData(res))
} ,[])
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity}`);
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