import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import MyImage from './Logo.JPG';

function BrandNav({setIsAddItem}) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">  <img
              src={MyImage}
              width="190"
              height="150"
              className="d-inline-block align-top"
             
            /></Navbar.Brand>
            <button onClick={() => setIsAddItem(true)}>Add new Item to Inventory</button>
        </Container>
      </Navbar>

    </>
  );
}

export default BrandNav;