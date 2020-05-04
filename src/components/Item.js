import React from 'react';

function Item(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "cdcdcd",
    textDecoration: "line-through"
  }
  return (
    <div className="todo-item">
      <input 
        type="checkbox"     
        checked={props.item.completed}    
        onChange={() => props.handleChange(props.item.id)}     
      />
      <span style={props.item.completed ? completedStyle: null}> {props.item.text} </span>
      <br/>
    </div>
  );
}
 
export default Item;