import React, { Component } from 'react';
import Quote from './containers/Quote';
import RandomBackground from './containers/RandomBackground';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote />
        <RandomBackground />
      </div>
    );
  }
}

export default App;
