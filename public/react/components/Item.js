import React from "react";
import apiURL from "../api";
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from "react-bootstrap";


export const Item = ({ item, setSingleItem}) => {
  

  const displayItemDetails = async () => {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const data = await response.json();
    setSingleItem(data);
  
  };

  function CardInv(item) {

  }
 
  // To render the single page view to see a single item
  // ? do we need to fetch item by id? to render view?
  
  return (
     <Container  className="d-flex w-25 flex-row flex-colum">
        <Card className="card-block" >
      <Card.Img variant="top" src={item.image}  onClick={() => displayItemDetails(item)}  />
      <Card.Body>
      <Card.Text onClick={() => displayItemDetails(item)}>Click here or on the image for details </Card.Text>
        <Card.Title>{item.title}</Card.Title>
     </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${item.price}</ListGroup.Item>
        <ListGroup.Item>{item.description}</ListGroup.Item>
        <ListGroup.Item>{item.category}</ListGroup.Item>
      </ListGroup>
      </Card>
    
      </Container>
    
   
 

 
    
   


   
  );

  
  }