import React from 'react';
import {Component} from 'react';
import logo from './LCO-logo-white.png';
import './App.css';


class App  extends Component {
  constructor(props){
    super(props)
    this.state={
      newItem: "",
      list: []
    }
  }
  addItem(todoValue){
    console.log("Add item function called:");
    if (todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    console.log("list after deletion:", updatedList);
    this.setState({
      list: updatedList
    });
  }

  updateInput(input){
    this.setState({newItem:input})
  }

  render() {
    return(
      <div>
        <img src={logo} style={{background: "red"}} className="logo" alt="" />
        <h1 className="app-title">TODO App</h1>
        <div className="container">
          Add an item....
          <br />
          <input type="text"
          className="input-text"
          placeholder="write a Todo"
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
          />
          <button
          className="add-btn"
          onClick={()=> this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add Todo</button>
        </div>
        <div className="list">
          <ul>
            {this.state.list.map(item =>{
              return(
                <li key={item.id}>
                  <input
                  type="checkbox"
                  name="isDone"
                  checked={item.isDone}
                  onChange={()=> {}}
                  />
                  {item.value}
                  <button
                  className="btn"
                  onClick={()=>this.deleteItem(item.id)}
                  >Delete</button>
                </li>
              );
            })}
            <li>
              <input type="checkbox"
              name="" id="" />
              Record youtube videos
              <button className="btn">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;