import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>this is a heading</h1> 
        <Button title='Find Flights' primary />
        <Button title='Sign up' />
        <Button title='Enter Competition' magic />
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        No more content
      </div>
    );
  }
}

export default App;
