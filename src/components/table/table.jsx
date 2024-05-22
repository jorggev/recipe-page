/* eslint-disable no-unused-vars */
import React from 'react';
import './table.css';

const Table = () => {
  return (
    <table className="simple-table">
      <tbody>
        <tr>
          <td>Calories</td>
          <td className='column-brown'>277kcal</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td className='column-brown'>0g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td className='column-brown'>20g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td className='column-brown'>22g</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
