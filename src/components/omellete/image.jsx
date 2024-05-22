/* eslint-disable no-unused-vars */
import React from 'react';
import './omellete.css';
import omelette from '../../assets/images/omelette.jpg'

const OmelleteImage = () => {
    return (
        <div className='omellete-container'>
            <img src={omelette} alt="Omelette" className="header-image"/>
        </div>

    );
};

export default OmelleteImage;
