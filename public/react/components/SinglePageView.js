import React from "react";


import apiURL from "../api";

export const SinglePageView= ({ singleItem, setIsAddItem}) => {

  
  const deleteInventoryItem = async () => {        
    window.location.reload(false);
    const response = await fetch(`${apiURL}/items/${singleItem.id}`, {
        method: "DELETE"});
        const data = await response.json();
      
    }


    return (
    <>
    

      <h3>{singleItem.title}</h3>
      <img src={singleItem.image} />
      <h2>${singleItem.price}</h2>
      <p>{singleItem.description}</p>
      <p>{singleItem.category}</p>

      <button onClick={() => { setIsAddItem(false);  }}>Return to Inventory</button>
      <button onClick={deleteInventoryItem}>DELETE</button>
    </>
    );
};








    
   



 


