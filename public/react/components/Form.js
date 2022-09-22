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
    });

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
      <section className="contact py-3">
        <div className="container">
          <div className="row">
            <div className="card-body">
              <h4>Add inventory Item</h4>
              <form className="form-group" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="title"
                  className="form-control"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
                {/*  */}
                <input
                  type="text"
                  placeholder="description"
                  className="form-control"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
                {/*  */}
                <input
                  type="text"
                  placeholder="price"
                  className="form-control"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
                {/*  */}
                <input
                  type="text"
                  placeholder="image"
                  className="form-control"
                  value={image}
                  onChange={(event) => {
                    setImage(event.target.value);
                  }}
                />
                {/*  */}
                <input
                  type="text"
                  placeholder="category"
                  className="form-control"
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                />
                <button
                  className=" col-md-6 btn btn_u btn-outline-secondary shadow-sm mt-1"
                  type="submit"
                >
                  Add item to inventory
                </button>

                <button
                  className=" col-md-6 btn btn_u btn-secondary shadow-sm mt-1"
                  onClick={() => {
                    setIsAddItem(false);
                  }}
                >
                  Return to Inventory
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
