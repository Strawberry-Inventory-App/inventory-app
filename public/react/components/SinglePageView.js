import React from "react";

import apiURL from "../api";
import { UpdatingInventory } from "./UpdateInventory";

export const SinglePageView = ({
  singleItem,
  setSingleItem,
  setIsUpdatingInventory,
  isUpdatingInventory,
  fetchItems = { fetchItems },
}) => {
  const deleteInventoryItem = async () => {
    window.location.reload(false);
    const response = await fetch(`${apiURL}/items/${singleItem.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
  };

  return (
    <>
      <section id="blog" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-columns">
                <div className="card">
                  {isUpdatingInventory ? (
                    <UpdatingInventory
                      setIsUpdatingInventory={setIsUpdatingInventory}
                      isUpdatingInventory={isUpdatingInventory}
                      singleItem={singleItem}
                    />
                  ) : (
                    <div>
                      <h3 className="card-text text-center">
                        {singleItem.title}
                      </h3>
                      <img
                        className="img_update img-fluid mx-auto d-block"
                        src={singleItem.image}
                      />
                      <div className="card-body mx-auto d-block">
                        <h2 className="card-title text-center">
                          <span className="colorR">Our Price: </span>$
                          {singleItem.price}
                        </h2>
                        <p className="card-text text-justify text-center">
                          {singleItem.description}
                        </p>
                        <p className="card-text text-center border_c">
                          <span>Category: </span>
                          {singleItem.category}
                        </p>

                        <button
                          className="btn btn-outline-secondary shadow-sm mb-4 "
                          onClick={() => setSingleItem(false)}
                        >
                          Return to Inventory
                        </button>
                        <button
                          className="btn btn-outline-secondary shadow-sm mb-4"
                          onClick={deleteInventoryItem}
                        >
                          DELETE
                        </button>
                        <button
                          className="btn btn-outline-secondary shadow-sm mb-4"
                          onClick={() => setIsUpdatingInventory(true)}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
