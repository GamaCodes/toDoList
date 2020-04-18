import React from 'react';

function Item(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.toDo.completed} />
      <span> {props.toDo.text} </span>
      <br/>
    </div>
  );
}

export default Item;