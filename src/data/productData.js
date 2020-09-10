// images and icons
import theLeanStartup from '../img/products/theLeanStartup.jpg';
import kenwood from '../img/products/kenwood.jpg';
import band from '../img/products/band.jpg';
import echo from '../img/products/echo.jpg';
import iPad from '../img/products/iPad.jpg';
import monitor from '../img/products/monitor.jpg';
// images for discover
import languages from '../img/discover/languages.png';
import currencies from '../img/discover/currencies.jpg';
import payment from '../img/discover/payment.jpg';
import fees from '../img/discover/fees.jpg';
import track from '../img/discover/track.jpg';
import service from '../img/discover/service.jpg';
// images for books
import algo from '../img/books/algo.jpg';
import htmlCss from '../img/books/htmlCss.jpg';
import js from '../img/books/js.jpg';
import reactjs from '../img/books/reactjs.jpg';
import reactNative from '../img/books/reactNative.jpg';
import nodejs from '../img/books/nodejs.jpg';
import expressjs from '../img/books/expressjs.jpg';


const productData = {
    dataRow1: [
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
    ],
    dataRow2: [
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
    ],
    dataRow3: [
        {
            id: "3000001",
            title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
            image: monitor,
            price: 1094.98,
            rating: 4
        }
    ],
    discover: {
        languages,
        currencies,
        payment,
        fees,
        track,
        service
    },
    books: [
        {
            id: "4000001",
            title: "Algorithms",
            image: algo,
            price: 99.99,
            rating: 5
        },
        {
            id: "4000001",
            title: "HTML & CSS",
            image: htmlCss,
            price: 89.99,
            rating: 5
        },
        {
            id: "4000001",
            title: "JavaScript",
            image: js,
            price: 120.98,
            rating: 5
        },
        {
            id: "4000001",
            title: "React Js",
            image: reactjs,
            price: 105.99,
            rating: 4
        },
        {
            id: "4000001",
            title: "React Native",
            image: reactNative,
            price: 110.99,
            rating: 5
        },
        {
            id: "4000001",
            title: "Node Js",
            image: nodejs,
            price: 150.99,
            rating: 4
        }
        ,
        {
            id: "4000001",
            title: "Express Js",
            image: expressjs,
            price: 79.99,
            rating: 5
        }
    ]
}

export default productData;