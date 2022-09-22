import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



function CarouselView() {
    return (
<Carousel fade>
<Carousel.Item>
  <img
    className="d-block w-50 mx-auto"
    src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>Mens Cotton Jacket"</h3>
    <p>stylin and profilin ric flair</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-50 mx-auto"
    src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>Rain Jacket Women Windbreaker Striped Climbing Raincoat</h3>
    <p>For when Timberland is at your window, but you can't stand the rain</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-50 mx-auto"
    src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor</h3>
    <p>
      Who needs a Flipmode Sqaud...when there is Darkmode?
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>

);
}

export default CarouselView;