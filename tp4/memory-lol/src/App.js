import React, { Component } from 'react';
import Memory from './Memory';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MIASHS's React TP</h1>
        </header>
		
		<Memory></Memory>
      </div>
    );
  }
}

export default App;
