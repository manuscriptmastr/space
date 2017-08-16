import React, { Component } from 'react';
import Header from './header';
import Plan from './plan';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header message="Jonathan's Bedroom"/>
        <Plan className="Plan"/>
      </div>
    );
  }
}

export default App;
