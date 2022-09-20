import React from "react";
import { Item } from "./Item";
// like Wikiverse must pass state for addingItems and settingItems
export const ItemsList = ({ items, setSingleItem, singleItem, setIsClicked }) => {
  return (
    <>
      {/* <button
        onClick={() => {
          setIsAddItem(true);
        }}
      >
        Add Item
      </button> */}
      {
        //Button to add(this is the Post request). Will have to update return statement.
        items.map((item, idx) => {
          return <Item item={item} key={idx} singleItem={singleItem} setSingleItem={setSingleItem} setIsClicked={setIsClicked} />;
        })
      }
    </>
  );
};
