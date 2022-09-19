import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
//custom

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  //new code
  const [singleItem, setSingleItem] = useState(null);
  const [isAddingItem, setIsAddingItem] = useState(false);
  //
  const [] = useState();

  //
  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [singleItem, isAddingItem]);

  return (
    <main>
      {/**add single page view */}

      <h1>StrawBerry Inventory List</h1>
      <h2>All things 🔥</h2>

      {isAddingItem ? (
        <Form setIsAddingItem={setIsAddingItem} />
      ) : singleItem ? (
        <ItemView singleItem={singleItem} setSingleItem={setSingleItem} />
      ) : (
        <ItemsList
          setIsAddingItem={setIsAddingItem}
          items={items}
          setSingleItem={setSingleItem}
        />
      )}
    </main>
  );
};
