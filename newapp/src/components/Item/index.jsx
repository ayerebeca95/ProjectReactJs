import './item.css';
//import alfombra1 from '../../assets/alfombra1.jpg';
import { Link } from "react-router-dom";


const Item = ({info}) => {
   
    return(
    <Link to={`/detalle/${info.id}`}  className= "film">
        <img src={info.image} alt= "" />
        <p>{info.title} </p>
    </Link>
    );
}

export default Item;