import React, { useState} from 'react';
import apiURL from "../api";
// import {useRef} from 'react';



export const UpdatingInventory = ( {setIsUpdatingInventory, singleItem}) => {

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
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },   
            body: JSON.stringify({

           title: title,
           description: description,
           price: price,
            image: image,
            category: category,
            })

            })
            const data = await response.json();
            // setSingleItem(data);
            // fetchItems();
            console.log(data)

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
       
       <img src={singleItem.image} alt={singleItem.title} /> 
        <p>Inventory item #: {singleItem.id}</p>
        {/* <p>{singleItem.description}</p> */}

  {/* {console.log( (singleItem.id))}
  {console.log( (singleItem.title))}
  {console.log( (singleItem.price))}
  {console.log( (singleItem.category))}
  {console.log( (singleItem.image))} */}


        <br></br>
        {/* <h4>{singleItem.category}</h4>   */}
       
       

  
      <h6>update form</h6>
      <form onSubmit={updateSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <input 
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
   
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
        {/* https://bobbyhadz.com/blog/react-component-changing-uncontrolled-input */}
           {/* value={category || ''} */}
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button type="submit">Update item to inventory</button>
   
        <button onClick={() => { setIsUpdatingInventory(false)}} >Back</button>
      </form>
    </>
  )};