import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Title from "../Title";
//import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import "./index.css";
import { useParams } from "react-router-dom";
//import piscina1  from "../../assets/piscina1.jpg";
//import piscina2  from "../../assets/piscina2.jpg";
//import piscina3  from "../../assets/piscina3.jpg";
//import piscina4  from "../../assets/piscina4.jpg";
//import jacuzzi1  from "../../assets/jacuzzi1.jpg";
//import jacuzzi2  from "../../assets/jacuzzi2.jpg";



export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb,'items')
    
     if (categoriaId) {
      const queryFilter = query(queryCollection, where('category','==', categoriaId))
      getDocs(queryFilter)
      .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
   } else {
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
  
    }
  
  }, [categoriaId]);


  return (
    <>
      <Title greeting={texto} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;


