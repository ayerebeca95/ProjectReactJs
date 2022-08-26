import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail';

const film = {id: 1, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jarrones-tonos-tierra-1604668041.jpg?crop=1.00xw:0.892xh;0,0.0798xh&resize=1200:*", title: "Floreros decorativos de todos los tamaños: Hecho en Turquía."}

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  useEffect(() =>{
    const getData = new Promise (resolve  =>{
      setTimeout(() => {
        resolve(film)
      },3000 );
    });
    getData.then(res => setData(res))
  }, [])

  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer;