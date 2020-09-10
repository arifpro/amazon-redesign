import React from 'react';
import './DiscoverItem.css';

const DiscoverItem = ({ image }) => {
    return (
        <section className="discover">
            <div className="discover__item">
                <img src={image} alt="img"/>
            </div>  
        </section>
    )
}

export default DiscoverItem;
