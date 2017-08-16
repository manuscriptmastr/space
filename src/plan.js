import React, { Component } from 'react';
import Palette from './palette';
import Workspace from './workspace';
import './css/plan.css';

let testRug = {
  type: 'rug',
  x: 80,
  y: 47,
  width: 30,
  height: 50,
  fill: '#EEE'
}

let testLamp = {
  type: 'lamp',
  cx: 31,
  cy: 53,
  r: 30,
  fill: '#AAA'
}

let testPlan = {
  items: {
    testRug,
    testLamp
  }
}

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: testPlan
    }
  }
  render() {
    let onMouseDown = (item, reactEvent) => {
      let x = reactEvent.clientX;
      let y = reactEvent.clientY;
    }
    let onMouseUp = (item, reactEvent) => {
      let x = reactEvent.clientX;
      let y = reactEvent.clientY;
    }
    return (
      <div className="Plan">
        <Palette className="Palette"/>
        <Workspace plan={this.state.plan} onMouseDown={onMouseDown} onMouseUp={onMouseUp}/>
      </div>
    );
  }
}

export default Plan;
