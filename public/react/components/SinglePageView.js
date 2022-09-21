import React from "react";


import apiURL from "../api";
import { UpdatingInventory } from "./UpdateInventory";

export const SinglePageView = ({ singleItem, setSingleItem, setIsUpdatingInventory, isUpdatingInventory, fetchItems={fetchItems}}) => {


  const deleteInventoryItem = async () => {
    window.location.reload(false);
    const response = await fetch(`${apiURL}/items/${singleItem.id}`, {
      method: "DELETE"
    });
    const data = await response.json();

  }


          
  return (
    <>

{isUpdatingInventory? (
				<UpdatingInventory setIsUpdatingInventory={setIsUpdatingInventory} isUpdatingInventory={isUpdatingInventory} singleItem={singleItem} />
        ) : ( <div>
      <h3>{singleItem.title}</h3>
      <img src={singleItem.image} />
      <h2>${singleItem.price}</h2>
      <p>{singleItem.description}</p>
      <p>{singleItem.category}</p>
      
      <button onClick={() => setSingleItem(false)}>Return to Inventory</button>
      <button onClick={deleteInventoryItem}>DELETE</button>
      <button onClick={() => setIsUpdatingInventory(true)}>Update the item in inventory</button>
      </div> )}
      </>
  );
  }
















