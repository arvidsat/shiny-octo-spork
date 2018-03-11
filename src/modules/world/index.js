import PicoGL from 'picogl'

import { plane } from '../vertexBuffers'

import { Cube } from '../object'

import Camera from '../camera'

import fragmentShaderSource from './fragmentShaderSource'
import vertexShaderSource from './vertexShaderSource'

export default function createWorld(canvas) {
  const app = PicoGL.createApp(canvas).clearColor(0.0, 0.0, 0.0, 1.0).defaultViewport()

  const program = app.createProgram(vertexShaderSource, fragmentShaderSource)

  const p = plane({
    width: 1,
    height: 1,
    dWidth: 10,
    dHeight: 10,
    pivot: [0.5, 0.5],
  })

  console.log(p)

  const cube = new Cube({
    size: 1,
    pivot: {
      x: 0.5,
      y: 0.5,
      z: 0.5,
    }
  })

  const camera = new Camera({
    fov: 60,
    zNear: 1,
    zFar: 1000,
    aspect: canvas.clientWidth / canvas.clientHeight,
  })
  camera.translate(0, 0, 2)

  const positions = app.createVertexBuffer(PicoGL.FLOAT, 3, p)

  const vertexArray = app.createVertexArray().vertexAttributeBuffer(0, positions)

  const uniformBuffer = app.createUniformBuffer([
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT,
  ])

  const drawCall = app.createDrawCall(program, vertexArray).uniformBlock("CameraUniforms", uniformBuffer)

  let scrollPosition = 0
  const maxScrollPosition = 10000
  // Start listening for scroll event
  window.addEventListener('wheel', (e) => {
    scrollPosition += e.deltaY
  })

  const draw = () => {
    camera.update()
    app.clear()

    const normalizedScrollPosition = scrollPosition / maxScrollPosition

    uniformBuffer
      .set(0, camera.viewMatrix)
      .set(1, camera.projectionMatrix)
      .set(2, normalizedScrollPosition)
      .update()

    

    drawCall.draw()
    window.requestAnimationFrame(draw)
  }
  draw()
}
