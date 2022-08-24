import './item.css';
import React from 'react';
//import alfombra1 from '../../assets/alfombra1.jpg';


const Item = ({info}) => {
    return(
    <a href=" " className= "film">
        <img src={info.image} alt= "alfombra1" width="50%"/>
    <p>{info.title} </p>
    </a>
    );
}

export default Item;