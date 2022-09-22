import React, { useState } from "react";
import apiURL from "../api";
// import {useRef} from 'react';

export const UpdatingInventory = ({ setIsUpdatingInventory, singleItem }) => {
  const [title, setTitle] = useState(singleItem.title);
  const [description, setDescription] = useState(singleItem.description);
  const [price, setPrice] = useState(singleItem.price);
  const [image, setImage] = useState(singleItem.image);
  const [category, setCategory] = useState(singleItem.category);

  const updateSubmit = async (event) => {
    window.location.reload(false);
    event.preventDefault();
    // console.log(inputRef.current.value);

    const response = await fetch(`${apiURL}/items/${singleItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        image: image,
        category: category,
      }),
    });
    const data = await response.json();
    // setSingleItem(data);
    // fetchItems();
    console.log(data);

    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
    setCategory("");
  };

  return (
    <>
      {/* <h1>{singleItem.title}</h1>
        <h2>${singleItem.price}</h2> */}
      <div className="container">
        <div className="card">
          {/* back button */}
          <button
            className="btn btn-secondary btn-sm  btn-width"
            onClick={() => {
              setIsUpdatingInventory(false);
            }}
          >
            Back
          </button>
          {/* end back button */}
          <h3 className="mt-4 font-weight-normal mx-auto d-block">
            Update Product
          </h3>
          <img
            className="img mx-auto d-block"
            src={singleItem.image}
            alt={singleItem.title}
          />
          <p className="mx-auto d-block">Inventory item #: {singleItem.id}</p>
          {/* <p>{singleItem.description}</p> */}

          {/* {console.log( (singleItem.id))}
  {console.log( (singleItem.title))}
  {console.log( (singleItem.price))}
  {console.log( (singleItem.category))}
  {console.log( (singleItem.image))} */}

          <br></br>
          {/* <h4>{singleItem.category}</h4>   */}

          {/* <h6 >update form</h6> */}
          <form className="py-4" onSubmit={updateSubmit}>
            <div className="form-group row col-md-4 mx-auto d-block">
              <label for="Title" className="colorR">
                Title:
              </label>
              <input
                type="text"
                className="form-control text-center"
                placeholder="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="form-group row col-md-4 mx-auto d-block">
              <label for=" Description" className="colorR">
                {" "}
                Description:
              </label>
              <input
                type="text"
                className="form-control text-center"
                placeholder="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <div className="form-group row col-md-4 mx-auto d-block">
              <label for=" Price" className="colorR">
                {" "}
                Price:
              </label>
              <input
                type="text"
                className="form-control text-center"
                placeholder="price"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div className="form-group row col-md-4 mx-auto d-block">
              <label for=" Image Url " className="colorR">
                {" "}
                Image Url:
              </label>
              <input
                type="text"
                className="form-control text-center"
                placeholder="image"
                value={image}
                onChange={(event) => {
                  setImage(event.target.value);
                }}
              />
            </div>
            {/* https://bobbyhadz.com/blog/react-component-changing-uncontrolled-input */}
            {/* value={category || ''} */}
            <div className="form-group row col-md-4 mx-auto d-block">
              <label for=" Category" className="colorR">
                {" "}
                Category:
              </label>
              <input
                type="text"
                placeholder="category"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              />
            </div>
            <button
              className="btn btn_u btn-outline-secondary shadow-sm mt-1"
              type="submit"
            >
              Update
            </button>
            {/* <button
              onClick={() => {
                setIsUpdatingInventory(false);
              }}
            >
              Back
            </button> */}
          </form>
        </div>
      </div>
      {/* container end*/}
    </>
  );
};
