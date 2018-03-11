export default `#version 300 es
precision highp float;

layout(std140) uniform CameraUniforms {
  mat4 viewMatrix;
  mat4 projectionMatrix;
  float scrollPosition;
};

out vec4 fragColor;
void main() {
  fragColor = vec4(scrollPosition, 1.0, 1.0, 1.0);
}
`