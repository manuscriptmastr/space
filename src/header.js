import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Header">
        <img className="Header Logo" src="/logo.svg"/>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

export default Header;
