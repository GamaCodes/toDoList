import React, { Component } from 'react';
import Item from './components/Item';
import toDosData from './data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: toDosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log(this.state.data[id-1].completed)
    this.setState(prevState => {
       const change = prevState.data.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        } return todo
      })
      return {
        data: change
      }
    })
    
  }
  render(){
    const getAll = this.state.data.map(item => <Item item={item} key={item.id} handleChange={this.handleChange} /> )
    return ( 
      <div className="todo-list">
        {getAll}
      </div>
    );
  }
}

export default App;
