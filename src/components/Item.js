import React from 'react';

function Item(props) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox"     
        checked={props.item.completed}    
        onChange={() => props.handleChange(props.item.id)}     
      />
      <span> {props.item.text} </span>
      <br/>
    </div>
  );
}

export default Item;