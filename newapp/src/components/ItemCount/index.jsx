import React, { useState} from 'react'



const ItemCount = ({handleAdd, initial}) => {

    const [counter, setCounter] = useState(initial)

    const onAdd = () => {

   setCounter(counter + 1)

    }

    const onDecrement = () => {
        setCounter(counter - 1)
    }
  return (
    <div>
   <p>{counter} </p>
   <button onClick={onAdd}>+</button>
   <button onClick={onDecrement}>-</button>
 <button onClick={(initial)=> handleAdd(counter)}>Agregar al carrito</button>
 </div>
   )
}

export default ItemCount;