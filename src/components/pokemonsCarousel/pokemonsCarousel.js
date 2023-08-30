import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import pokemonsCarousel from '../pokemonsCarousel/pokemonsCarousel.css'

function PokemonsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2768451.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome in Pokemons Galaxy</h3>
          <p>Let's start our adventures</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.custom-cursor.com/collections/129/cover-pokemon-preview.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Welcome in Pokemons Galaxy</h3>
          <p>Let's start our adventures</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Pokemon-Background-HD.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Welcome in Pokemons Galaxy</h3>
          <p>
          Let's start our adventures
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/21/65/UQniT8.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Welcome in Pokemons Galaxy</h3>
          <p>
          Let's start our adventures
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default PokemonsCarousel