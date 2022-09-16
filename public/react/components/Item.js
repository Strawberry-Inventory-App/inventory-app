import React from 'react';

export const Item = (props) => {
// To render the single page view to see a single item
// ? do we need to fetch item by id? to render view?
  return <>
    <h3>{props.item.name}</h3>
    <img src={props.item.image} alt={props.item.name} />
  </>
} 
	

