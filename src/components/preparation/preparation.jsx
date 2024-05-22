/* eslint-disable no-unused-vars */
import React from 'react';
import './preparation.css';

const Preparation = () => {
  return (
    <div className='preparation-container'>
      <h2 className="title-raspberry">Preparation time</h2>
      <ul className='preparation-list'>
        <li className='item-list'><span className="bold-text">Total:</span> Approximately 10 minutes</li>
        <li className='item-list'><span className="bold-text">Preparation:</span> 5 minutes</li>
        <li className='item-list'><span className="bold-text">Cooking:</span> 5 minutes</li>
      </ul>
    </div>
  );
};

export default Preparation;
