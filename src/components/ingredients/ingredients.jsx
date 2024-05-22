/* eslint-disable no-unused-vars */
import React from 'react';
import './ingredients.css'


const Ingredients = () => {
  return (
    <div className='ingredients-container'>
      <h2 className="title-brown">Ingredients</h2>

      <ul className='second-list'>
        <li className='ingredients-items'>2-3 large eggs</li>
        <li className='ingredients-items'>Salt, to taste</li>
        <li className='ingredients-items'>Pepper, to taste</li>
        <li className='ingredients-items'>1 tablespoon of butter or oil</li>
        <li className='ingredients-items'>Optional fillings: cheese, diced
          vegetables, cooked meats, herbs
        </li>

      </ul>
    </div>
  );
};

export default Ingredients;
