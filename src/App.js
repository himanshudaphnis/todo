import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";

class App extends Component {
  constructor(){
    super();
    this.state ={
      items: [],
      currentItem: {text:'', key:''},
    };
  }
  inputElement = React.createRef();
  handleInput = e => {
    const itemNext = e.target.value;
    const currentItem = { text: itemNext, key: Date.now() };
    this.setState({
      currentItem,
    });
  }
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if(newItem.text!=='') {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text:'', key:'' },
      });
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key!==key;
    });
    this.setState({
      items: filteredItems,
    });
  }
  render() {
    const inputElement = React.createRef();
    return (
      <div className="App">
        <TodoList 
          addItem={this.addItem} 
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;