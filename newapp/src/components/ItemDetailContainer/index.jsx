import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail';
//import { useParams } from "react-router-dom";


const film = 
  {id: 1, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jarrones-tonos-tierra-1604668041.jpg?crop=1.00xw:0.892xh;0,0.0798xh&resize=1200:*", category:"muebles",  title: "canasta"};
  //{id: 2, image:"https://i.pinimg.com/736x/a5/c7/82/a5c7823b3dc6003b81c969ac067e680e.jpg", category:"series", title: "botella de adorno"},
  //{id: 3, image: "https://casa-web.com.ar/wp-content/uploads/2013/07/alfombras-alegres-para-pisos-oscuros-768x768.jpg", category:"films",  title: "alfombra"}


export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  
  useEffect(() =>{
    const getData = new Promise (resolve  =>{
      setTimeout(() => {
        resolve(film)
      },1000 );
    });
    getData.then(res => setData(res))
    }, [])

  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer;