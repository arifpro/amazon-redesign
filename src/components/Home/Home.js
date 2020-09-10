import React, { useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import DiscoverItem from '../DiscoverItem/DiscoverItem';
import Books from '../Books/Books';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';


// image
import homeImg1 from '../../img/homeImg.jpg';
import homeImg2 from '../../img/homeImg2.jpg';
import homeImg3 from '../../img/homeImg3.jpg';

// data
import productData from '../../data/productData';


const Home = () => {
    return (
        <section className="home">
            <div className="home__container">
                {/* <img src={homeImg} alt="homeImg" className="home__image" /> */}

                <Carousel className="home__imageSlide">
                    <img src={homeImg1} alt="homeImg1" />
                    <img src={homeImg2} alt="homeImg2" />
                    <img src={homeImg3} alt="homeImg3" />
                </Carousel>

                {/* <Carousel>
                    <div>
                        <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" alt="homeImg" className="home__image" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" alt="homeImg" className="home__image" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="http://react-responsive-carousel.js.org/assets/3.jpeg" alt="homeImg" className="home__image" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel> */}

                <div className="home__row">
                    <Product 
                        id={productData.dataRow1[0].id}
                        title={productData.dataRow1[0].title}
                        image={productData.dataRow1[0].image}
                        price={productData.dataRow1[0].price}
                        rating={productData.dataRow1[0].rating}
                    />
                    <Product 
                        id={productData.dataRow1[1].id}
                        title={productData.dataRow1[1].title}
                        image={productData.dataRow1[1].image}
                        price={productData.dataRow1[1].price}
                        rating={productData.dataRow1[1].rating}
                    />
                </div>

                <div className="home__row home__discover">
                    <h2 className="home__discoverTitle">
                        Discover Amazon <Link className="home__discoverLink" to="#">Click to learn more</Link>
                    </h2>
                    <div className="home__discoverDiv">
                        <DiscoverItem image={productData.discover.languages} />
                        <DiscoverItem image={productData.discover.currencies}/>
                        <DiscoverItem image={productData.discover.payment}/>
                        <DiscoverItem image={productData.discover.fees}/>
                        <DiscoverItem image={productData.discover.track}/>
                        <DiscoverItem image={productData.discover.service}/>
                    </div>
                </div>

                <div className="home__row">
                    <Product 
                        id={productData.dataRow2[0].id}
                        title={productData.dataRow2[0].title}
                        image={productData.dataRow2[0].image}
                        price={productData.dataRow2[0].price}
                        rating={productData.dataRow2[0].rating}
                    />
                    <Product 
                        id={productData.dataRow2[1].id}
                        title={productData.dataRow2[1].title}
                        image={productData.dataRow2[1].image}
                        price={productData.dataRow2[1].price}
                        rating={productData.dataRow2[1].rating}
                    />
                    <Product 
                        id={productData.dataRow2[2].id}
                        title={productData.dataRow2[2].title}
                        image={productData.dataRow2[2].image}
                        price={productData.dataRow2[2].price}
                        rating={productData.dataRow2[2].rating}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id={productData.dataRow3[0].id}
                        title={productData.dataRow3[0].title}
                        image={productData.dataRow3[0].image}
                        price={productData.dataRow3[0].price}
                        rating={productData.dataRow3[0].rating}
                    />
                </div>

                <div className="home__row home__book">
                    <h2 className="home__bookTitle">
                        Books <Link className="home__bookLink" to="#">Click to see more</Link>
                    </h2>

                    <div className="home__bookDiv">
                        {
                            Array(7).fill().map((_, i) => (
                                <Books 
                                id={productData.books[i].id}
                                title={productData.books[i].title}
                                image={productData.books[i].image}
                                price={productData.books[i].price}
                                rating={productData.books[i].rating}
                                />
                                ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
