import React, { Component } from 'react';
import './css/palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var tools = ['New piece', 'Ruler', 'Pencil'];
    return (
      <div className="Palette">
        {tools.map((tool, index) => <a href="#" key={index}>{tool}</a>)}
      </div>
    );
  }
}

export default Palette;
