import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
// import {Form} from './Form';
// import { SinglePageView } from './SinglePageView';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState({
		title: '',
		price: 0,
		category: '',
		description: '',
		image: ''
	  })
	const [isClicked, setIsClicked] = useState(false);
	// single item data on state (a new piece of state)
	const [singleItem, setSingleItem] = useState(null);
	const [isAddItem, setIsAddItem] = useState(false);

	const [] = useState();

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const data = await response.json();
			
			setItems(data);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	async function fetchSingleItem(id){
		try {
		  const response = await fetch(`${apiURL}/items/${id}`);
		  const item = await response.json();
		  setSingleViewItem(item);
		} catch (err) {
		  console.log("Oh no an error! ", err);
		}
	  }

	useEffect(() => {
		fetchItems();
	}, [singleItem, isAddItem]);

	return (
		<main>	
			
			<h1>StrawBerry Inventory List</h1>
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
  

{/* 
			{isClicked ? (
				<SinglePageView singleItem={singleItem} isClicked={setIsClicked} />
			) :
				isAddItem? (
					<Form setIsAddItem={setIsAddItem} fetchItems={fetchItems} />

				) : (
					<div>    <h1>Strawberry Inventory Application</h1>
					<h2>All things 🔥</h2>
					<ItemsList items={items} setSingleItem={setSingleItem} setIsClicked={setIsClicked} />
					</div>
				)
			} */}
		</main>
	)
}