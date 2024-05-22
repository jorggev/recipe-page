/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Ingredients from './components/ingredients/ingredients';
import Instructions from './components/instructions/instructions';
import Nutrition from './components/nutrition/nutrition';
import Preparation from './components/preparation/preparation';
import Description from './components/description/description';
import OmelleteImage from './components/omellete/image';
import './colors.css';
import './fonts.css'

function App() {
  return (
    <div className="App">


      <div className="second-root">
        <OmelleteImage />
        <h1 className='title-one'>Simple Omelette Recipe</h1>
        <Description />
        <Preparation />
        <Ingredients />
        <hr className="divider" />
        <Instructions />
        <hr className="divider" />
        <Nutrition />
      </div>

    </div>
  );
}

export default App;
