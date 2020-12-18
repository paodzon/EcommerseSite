import React from 'react';
import Product from './Components/Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""></img>
            </div>
            <div className="home__row">
            <Product id="1" name="The lean startup" price={19.99} rating={5} img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2uwzKyTD7LRxPLZuX2nYSfI-uL9GE4JUenUGvZoTCq8zKXBPW"/>
            <Product id="2" name="The lean startup" price={21.99} img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2uwzKyTD7LRxPLZuX2nYSfI-uL9GE4JUenUGvZoTCq8zKXBPW"/>
            </div>
            <div className="home__row">
            <Product id="3" name="The lean startup" price={49.99} img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2uwzKyTD7LRxPLZuX2nYSfI-uL9GE4JUenUGvZoTCq8zKXBPW"/>
            <Product id="4" name="The lean startup" price={79.99} img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2uwzKyTD7LRxPLZuX2nYSfI-uL9GE4JUenUGvZoTCq8zKXBPW"/>
            <Product id="5" name="The lean startup" price={123.00} img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2uwzKyTD7LRxPLZuX2nYSfI-uL9GE4JUenUGvZoTCq8zKXBPW"/>
            </div>
            <div className="home__row">
            <Product id="6" name="The lean startup" price={200.30} img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2uwzKyTD7LRxPLZuX2nYSfI-uL9GE4JUenUGvZoTCq8zKXBPW"/>
            </div>
        </div>
    )
}

export default Home
