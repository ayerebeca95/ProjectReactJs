import React, { useEffect, useState } from "react";
import Title from "../Title";
//import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import "./index.css";
import { useParams } from "react-router-dom";
import piscina1  from "../../assets/piscina1.jpg";
import piscina2  from "../../assets/piscina2.jpg";
import piscina3  from "../../assets/piscina3.jpg";
import piscina4  from "../../assets/piscina4.jpg";
import jacuzzi1  from "../../assets/jacuzzi1.jpg";
import jacuzzi2  from "../../assets/jacuzzi2.jpg";

const films = [
  
  {
    id: 1, price: 3899,
    image: piscina1,
    category: "piscina",
    title: "Clandestiny",
  },
  {
    id: 2, price: 2699,
   image: piscina2,
    title: " sun-set",
    category: "piscina",
  },
  {
    id: 3, price: 2899,
    image: piscina3,
    title: "Adaris floor",
    category: "piscina",
  },
  {
    id: 4, price: 3500,
    image:piscina4,
    title: "Mid-child",
    category: "piscina",
  },
  {
    id: 5, price: 3199,
    image: jacuzzi1,
    title: "Brown-hero",
    category: "jacuzzi",
  },
  {
    id: 6, price: 2499,
    image: jacuzzi2,
    title: "Ada-Silvestre",
    category: "jacuzzi",
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films);
      }, 1000);
    });
    if (categoriaId) {
      getData.then(res =>
        setData(res.filter(film => film.category === categoriaId)));
    } else {
      getData.then(res => setData(res));
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
