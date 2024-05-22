/* eslint-disable no-unused-vars */
import React from 'react';
import Table from '../table/table';
import './nutrition.css'

const Nutrition = () => {
  return (
    <div className='nutrition-container'>
      <h2 className="title-brown">Nutrition</h2>
      <p>The table below shows nutritional values per serving without the
      additional fillings.</p>
      <Table/>
    </div>
  );
};

export default Nutrition;
