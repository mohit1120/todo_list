import React from 'react';
import {Component} from 'react';
import logo from './LCO-logo-white.png';
import './App.css';


class App  extends Component {
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
          />
          <button
          className="add-btn">Add Todo</button>
        </div>
        <div className="list">
          <ul>
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