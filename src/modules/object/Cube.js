import SceneObject from './SceneObject'

import { cube } from '../vertexBuffers'

export class Cube extends SceneObject {
  constructor({
    size,
    pivot,
  }) {
    super()
    this.size = size
    this.pivot = pivot
  }

  get vertices() {
    return cube({
      size: this.size,
      pivot: this.pivot,
    })
  }
}
