import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import {Form} from './Form';
import { SinglePageView } from './SinglePageView';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([])
	const [isClicked, setIsClicked] = useState(false);
	// single item data on state (a new piece of state)
	const [singleItem, setSingleItem] = useState(null);
	const [isAddItem, setIsAddItem] = useState(false);



	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const data = await response.json();
			
			setItems(data);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	// async function fetchSingleItem(id){
	// 	try {
	// 	  const response = await fetch(`${apiURL}/items/${id}`);
	// 	  const item = await response.json();
	// 	  setSingleItem(item);
		  
	// 	} catch (err) {
	// 	  console.log("Oh no an error! ", err);
	// 	}
	//   }

	useEffect(() => {
		fetchItems();
		// fetchSingleItem();
	}, []);

	return (
		
		<main>	
			
			{/* <h1>StrawBerry Inventory List</h1>
      <h2>All things 🔥</h2>

      {isAddItem ? (
        <Form setIsAddingItem={setIsAddItem} />
      ) : singleItem ? (
        <ItemView singleItem={singleItem} setSingleItem={setSingleItem} />
      ) : (
        <ItemsList
          setIsAddItem={setIsAddItem}
          items={items}
          setSingleItem={setSingleItem}
        />
      )}
   */}


			{singleItem? (
				<SinglePageView singleItem={singleItem} setIsAddItem={setIsAddItem}  />
			) :
				isAddItem? (
					<Form setIsAddItem={setIsAddItem} fetchItems={fetchItems} />

				) : (
					<div>    
					<h1>Strawberry Inventory Application</h1>
					<h2>All things 🔥</h2>
					<ItemsList items={items} setSingleItem={setSingleItem}  />
					<button onClick={() => setIsAddItem(true)}>Add new Item to Inventory</button>
				
					</div>
				)
			}
		</main>
	)
}