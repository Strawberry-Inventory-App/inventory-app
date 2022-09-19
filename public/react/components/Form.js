import React, { useState } from "react";
import apiURL from "../api";

export const Form = ({ setIsAddingItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  async function formSubmit(event) {
    event.preventDefault();
    const data = { title, description, price, image, category };
    const response = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    await response.json();
    setIsAddingItem(false);
  }
  return (
    <>
      <h6>update form</h6>
      <form onSubmit={formSubmit}>
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
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            setIsAddingItem(false);
          }}
        >
          Cancel
        </button>
      </form>
    </>
  );
};
