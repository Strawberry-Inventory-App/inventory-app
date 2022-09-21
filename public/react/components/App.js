import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import {Form} from './Form';
import { SinglePageView } from './SinglePageView';

// import and prepend the api url to any fetch calls
import apiURL from '../api';



export const App = () => {

	const [items, setItems] = useState([])
	// const [isClicked, setIsClicked] = useState(false);
	// single item data on state (a new piece of state)
	const [singleItem, setSingleItem] = useState(null);
	const [isAddItem, setIsAddItem] = useState(false);
		// update inventory item
	const [isUpdatingInventory, setIsUpdatingInventory] = useState(false)



	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const data = await response.json();
			
			setItems(data);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	

	useEffect(() => {
		fetchItems();
		
	}, []);

	return (
		
		<main>	
			
	

			{singleItem? (
				<SinglePageView singleItem={singleItem} setSingleItem={setSingleItem}  isUpdatingInventory={isUpdatingInventory} setIsUpdatingInventory={setIsUpdatingInventory}  />
			) :
				isAddItem? (
					<Form setIsAddItem={setIsAddItem} fetchItems={fetchItems}/>
			
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