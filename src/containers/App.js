/*import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;*/

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> Main </h1>
        {this.props.children}
      </div>
    );
  }
}