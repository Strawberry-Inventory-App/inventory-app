import React, { useState } from "react";
import apiURL from "../api";

export const Item = ({ item, setSingleItem }) => {
  const handleClick = async () => {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const data = await response.json();
    setSingleItem(data);
  };
  // To render the single page view to see a single item
  // ? do we need to fetch item by id? to render view?
  return (
    <>
      <img src={item.image} />
      <h2>Item Title:{item.title}</h2>
      <h4>${item.price}</h4>
      <div>
        <button onClick={handleClick}>Details</button>
        <button>Add To Cart</button>
      </div>
    </>
  );
};
