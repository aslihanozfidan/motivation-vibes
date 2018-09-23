import React, { Component } from 'react';
import './App.css';

import Quote from './containers/Quote';
import RandomBackground from './components/RandomBackground';

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
