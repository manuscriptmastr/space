import React, { Component } from 'react';
import './css/workspace.css';

let Rug = ({ item: { x, y, width, height, fill } }) =>
  <rect x={x} y={y} width={width} height={height} fill={fill}/>

let Lamp = ({ item: { cx, cy, r, fill } }) =>
  <circle cx={cx} cy={cy} r={r} fill={fill}/>

let components = {
  lamp: Lamp,
  rug: Rug
}

let Workspace = ({ plan, onMouseDown, onMouseUp }) => {
  return(
    <svg>
      { plan.items.map(item => {
          let Component = components[item.type];
          return <g onMouseDown={(event)=>onMouseDown(item, event)} onMouseUp={(item, event)=>onMouseUp(item)}><Component item={item} /></g>;
          })
        }
    </svg>
  );
}

export default Workspace;
