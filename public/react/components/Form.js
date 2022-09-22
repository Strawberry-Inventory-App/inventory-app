import React, { useState } from "react";
import apiURL from "../api";


export const Form = ({ fetchItems, setIsAddItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        image: image,
        category: category,
      }),
    })

          
    const data = await response.json();
    console.log(data);
    fetchItems();

    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
    setCategory("");
  };

 

  return (
    <>
      <h6>Add inventory Item</h6>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        {/*  */}
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        {/*  */}
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        {/*  */}
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
        {/*  */}
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button type="submit">Add item to inventory</button>
   
        <button onClick={() => { setIsAddItem(false)}} >Return to Inventory</button>
      </form>
    </>
  );
};
