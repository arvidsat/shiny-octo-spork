export default `#version 300 es

layout(location=0) in vec4 aVertexPosition;

layout(std140) uniform CameraUniforms {
  mat4 viewMatrix;
  mat4 projectionMatrix;
  float scrollPosition;
};

void main() {
  gl_Position = projectionMatrix * viewMatrix * aVertexPosition;
}
`
