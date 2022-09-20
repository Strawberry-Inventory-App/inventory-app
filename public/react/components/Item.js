import React from "react";
import apiURL from "../api";







export const Item = ({ item, setIsClicked, setSingleItem }) => {
  
  const displayItemDetails = async () => {
    const response = await fetch(`${apiURL}/items`);
    const data = await response.json();
    setSingleItem(data);
    setIsClicked(true);
  };


  // To render the single page view to see a single item
  // ? do we need to fetch item by id? to render view?
  
  return (
    <>   
      <h2>{item.title}</h2>
      <h4>${item.price}</h4>
       <h3>Click on image for details</h3>
      <img src={item.image}  onClick={() => displayItemDetails(item)}/>
      {/* <button onClick={() => setIsClicked(null)}>Return to Inventory</button> */}
   


    </>
  );

  
  }