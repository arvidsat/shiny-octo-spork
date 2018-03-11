import Transform from '../transform'

class SceneObject {
  constructor() {
    this.transform = new Transform()
  }

  translate() {
    console.log('translating')
  }
}

export default SceneObject
