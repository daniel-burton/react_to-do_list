import React from 'react';
import './ListItem.css';

function ListItem ({onChange, id, value, removeItem}) {
  return (
    <div className="listItem">
      <input type='text'
        id={id}
        className='itemBox'
        value={value}
        onChange={onChange}
      />
    <button className="done" id={id} onClick={removeItem}>✓</button>
    </div>
  );
}


export default ListItem;
