import React from 'react';
import './Controls.css';

function Controls ({ addItem }) {
  return (
    <button className="add" onClick={addItem}>+</button>
  );
}
  
export default Controls;
