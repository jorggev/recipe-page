/* eslint-disable no-unused-vars */
import React from 'react';
import './instructions.css'


const Instructions = () => {
  return (
    <div className='container-instructions'>
      <h2 className="title-brown">Instructions</h2>
      <ol className='instructions-list'>

        <li className='instructions-item'>
          <span className="bold-text-instructions">Beat the eggs: </span>
          In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
        </li>

        <li className='instructions-item'>
          <span className="bold-text-instructions">Heat the pan: </span>
          Place a non-stick frying pan over medium heat and add butter or oil.
        </li>

        <li className='instructions-item'>
          <span className="bold-text-instructions">Cook the omelette: </span>
          Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
        </li>

        <li className='instructions-item'>
          <span className="bold-text-instructions">Add fillings (optional): </span>
          When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
        </li>

        <li className='instructions-item'>
          <span className="bold-text-instructions">Fold and serve: </span>
          As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
        </li>

        <li className='instructions-item'>
          <span className="bold-text-instructions">Enjoy: </span>
          Serve hot, with additional salt and pepper if needed.
        </li>

      </ol>
    </div>
  );
};

export default Instructions;


