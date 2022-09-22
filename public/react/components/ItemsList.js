import React from "react";
import { Item } from "./Item";
import Row from 'react-bootstrap/Row';
// like Wikiverse must pass state for addItems and setItems
export const ItemsList = ({ items, setSingleItem }) => {
  
  
  return (
    <>
      {
        //Button to add(this is the Post request). Will have to update return statement.
        items.map((item, idx) => {
          return <Item item={item} key={idx} setSingleItem={setSingleItem} />;
        })
      }
    </>
  );
};



