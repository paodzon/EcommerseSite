import React, { useEffect, useState } from "react";
import CarouselComp from "./Components/Carousel";
import Product from "./Components/Product";
import "./Home.css";

function Home({data}) {


  return (
    <div className="home">
      <div className="home__container">
        <CarouselComp />
      </div>
      <div className="home__title">
        <h3>Browse Products</h3>
        <div className="home__search">
          <input className="searchbar" type="text" placeholder="Search Item" />
        </div>
      </div>
      <div className="home__row">
        {data.map(item =>(
            <Product id={item.id} name={item.title} price={item.price} img={item.image}/>
        ))}
      </div>

    </div>
  );
}

export default Home;
