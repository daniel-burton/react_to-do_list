import React from 'react';
import './List.css';
import ListItem from './ListItem';


function List ({removeItem, handleChange, items}) {
  return (
    <div className="list">
      {items.map((item, index) => {
        return (<ListItem value={item} 
          id={index} 
          onChange={handleChange}
          removeItem={removeItem}
          />
        )})
      }
    </div>
  )
}

export default List;
