import React, { useState } from "react";

import apiURL from "../api";

export const SinglePageView= ({item, singleItem, setIsClicked}) => {

  
  const deleteInventoryItem = async () => {        window.location.reload(false);
    const response = await fetch(`${apiURL}/items`, {
        method: "DELETE"});
        const data = await response.json();
      
    }


    return (
    <>

      {/* <h3>{item.title}</h3> */}
      <h2>${singleItem.price}</h2>
      <img src={singleItem.image}/>
      <p>Description {singleItem.description}</p>
      <p>{singleItem.category}</p>
      <button onClick={() => setIsClicked(null)}>Return to InventoryS </button>
      <button onClick={deleteInventoryItem}>DELETE</button>
    </>
    );
};








    
   



 


