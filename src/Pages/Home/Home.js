import React, { useState,useEffect } from "react";
import CarouselComp from "./Components/Carousel";
import Product from "./Components/Product";
import "./Home.css";

function Home({data}) {

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] =useState("");
  const heroes = ["Batman", "Superman", "Aquaman", "Flash", "Green Lantern"];
  const [checkedValues, setCheckedValues] = useState([]);
  console.log(category);

  useEffect(() =>{
    setFilteredData(data.filter(val =>{
      return val.title.toLowerCase().includes(search.toLowerCase())
    }))

  },[search,data])



  return (
    <div className="home">
      <div className="home__container">
        <CarouselComp />
      </div>
      <div className="home__title">
        <div>
        <h3>Browse Products</h3>
        <label>Electronics</label>
        <input type="checkbox" id="electronics" value="electronics" onChange={e =>setCategory(e.target.value)}></input>
        </div>

        <div className="home__search">
          <input className="searchbar" type="text" placeholder="Search Item" onChange={e =>{setSearch(e.target.value)}} />
        </div>
      </div>
      <div className="home__row">
        {filteredData.map(item =>(
            <Product id={item.id} name={item.title} price={item.price} img={item.image}/>
        ))}
      </div>

    </div>
  );
}

export default Home;
