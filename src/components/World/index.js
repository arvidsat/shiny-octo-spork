import React, { Component } from 'react'
import createWorld from '../../modules/world'

class World extends Component {
  componentDidMount() {
    this.world = createWorld(this.canvas)
  }

  render() {
    return (
      <canvas
        width="500px"
        height="500px"
        id="canvas"
        ref={(c) => { this.canvas = c }}
      ></canvas>
    )
  }
}

export default World
