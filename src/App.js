import React, { Component } from 'react';
import Item from './components/Item';
import data from './data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: data
    }
  }
  render(){
    const getAll = this.state.data.map(item => <Item toDo={item} /> )
    return ( 
      <div className="todo-list">
        {getAll}
      </div>
    );
  }
}

export default App;
