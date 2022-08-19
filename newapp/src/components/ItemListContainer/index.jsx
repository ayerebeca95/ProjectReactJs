import React from 'react';




const ItemListContainer = ({greeting, children}) => {
  return (

    <div>
        {/* {children} */}
        <p>{greeting}</p>
        <img src='/assets/canasto1.jpg'  alt="yerba"/>
    </div>
  
  )
}

export default ItemListContainer