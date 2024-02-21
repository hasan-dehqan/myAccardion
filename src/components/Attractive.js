import React, { Component } from "react";

import "../styles/Attractive.css";

import Product from "./Product";

// images
import car_1 from "../images/car_1.jpg";
import car_2 from "../images/car_2.jpg";
import car_3 from "../images/car_3.jpg";
import car_4 from "../images/car_4.jpg";

class Attractive extends Component {
  constructor() {
    super();
    this.state = {
      Attractive: false,
    };
  }

  render() {
    return (
      <>
        <div className="tabContent">
          <Product img={car_1} productName="Zenvo ST1" productPrice="$1.2M">
            Few cars on the road are more striking, and even fewer accelerate
            faster. With a dry weight of less than 2,800 pounds, this
            dragon-like performance car accelerates.
          </Product>
          <Product
            img={car_2}
            productName="Aston Martin One-77"
            productPrice="$1.4M"
          >
            Under the vented hood lurks a naturally aspirated V12 that displaces
            Under the vented hood lurks a naturally aspirated V12 that displaces
            7.3 liters, which is a lot. It produces 750 hp and 553 lb-ft, which
            is also a lot.
          </Product>
          <Product
            img={car_3}
            productName="Ferrari F60 America"
            productPrice="$2.5M"
          >
            You can buy a lot with $2 million — a really nice house, about 80
            You can buy a lot with $2 million — a really nice house, about 80
            Mazda MX-5’s, or the Swedish “megacar” shown above. mega.
          </Product>
          <Product
            img={car_4}
            productName="Lamborghini Veneno"
            productPrice="$4.5M"
          >
            The car is absolutely stunning from every angle, and to this day,
            we’re not convinced it isn’t an alien spacecraft. 7.3 liters, which
            is a lot. It produces 750 hp is a lot. It produces 750 hp and 553
            lb-ft, which
          </Product>
        </div>
      </>
    );
  }
}

export default Attractive;
