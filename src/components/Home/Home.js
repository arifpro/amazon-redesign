import React from 'react';
import './Home.css';
import Product from '../Product/Product';
import DiscoverItem from '../DiscoverItem/DiscoverItem';

// images and icons
import homeImg from '../../img/homeImg.jpg';
import theLeanStartup from '../../img/products/theLeanStartup.jpg';
import kenwood from '../../img/products/kenwood.jpg';
import band from '../../img/products/band.jpg';
import echo from '../../img/products/echo.jpg';
import iPad from '../../img/products/iPad.jpg';
import monitor from '../../img/products/monitor.jpg';
// images for discover
import languages from '../../img/discover/languages.png';
import currencies from '../../img/discover/currencies.jpg';
import payment from '../../img/discover/payment.jpg';
import fees from '../../img/discover/fees.jpg';
import track from '../../img/discover/track.jpg';
import service from '../../img/discover/service.jpg';
// images for books
import js from '../../img/books/js.jpg';

const Home = () => {
    const dataRow1 = [
        {
            id: "1000001",
            title: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            image: theLeanStartup,
            price: 11.96,
            rating: 5
        },
        {
            id: "1000002",
            title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
            image: kenwood,
            price: 239,
            rating: 4
        }
    ];
    const dataRow2 = [
        {
            id: "2000001",
            title: "Xiaomi/mi LED Band | Good Looking | Many colors | More Design",
            image: band,
            price: 199.99,
            rating: 2
        },
        {
            id: "2000002",
            title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
            image: echo,
            price: 98.99,
            rating: 5
        },
        {
            id: "2000003",
            title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
            image: iPad,
            price: 598.99,
            rating: 4
        }
    ];
    const dataRow3 = [
        {
            id: "3000001",
            title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
            image: monitor,
            price: 1094.98,
            rating: 4
        }
    ]
    return (
        <section className="home">
            <div className="home__container">
                <img src={homeImg} alt="homeImg" className="home__image" />

                <div className="home__row">
                    <Product 
                        id={dataRow1[0].id}
                        title={dataRow1[0].title}
                        image={dataRow1[0].image}
                        price={dataRow1[0].price}
                        rating={dataRow1[0].rating}
                    />
                    <Product 
                        id={dataRow1[1].id}
                        title={dataRow1[1].title}
                        image={dataRow1[1].image}
                        price={dataRow1[1].price}
                        rating={dataRow1[1].rating}
                    />
                </div>

                <div className="home__row home__discover">
                    <h2>Discover Amazon <small>Click to learn more</small></h2>
                    <div className="home__discoverDiv">
                        <DiscoverItem image={languages} />
                        <DiscoverItem image={currencies}/>
                        <DiscoverItem image={payment}/>
                        <DiscoverItem image={fees}/>
                        <DiscoverItem image={track}/>
                        <DiscoverItem image={service}/>
                    </div>
                </div>

                <div className="home__row">
                    <Product 
                        id={dataRow2[0].id}
                        title={dataRow2[0].title}
                        image={dataRow2[0].image}
                        price={dataRow2[0].price}
                        rating={dataRow2[0].rating}
                    />
                    <Product 
                        id={dataRow2[1].id}
                        title={dataRow2[1].title}
                        image={dataRow2[1].image}
                        price={dataRow2[1].price}
                        rating={dataRow2[1].rating}
                    />
                    <Product 
                        id={dataRow2[2].id}
                        title={dataRow2[2].title}
                        image={dataRow2[2].image}
                        price={dataRow2[2].price}
                        rating={dataRow2[2].rating}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id={dataRow3[0].id}
                        title={dataRow3[0].title}
                        image={dataRow3[0].image}
                        price={dataRow3[0].price}
                        rating={dataRow3[0].rating}
                    />
                </div>

                <div className="home__row"></div>
            </div>
        </section>
    )
}

export default Home;
