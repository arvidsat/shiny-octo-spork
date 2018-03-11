export function plane({
  width,
  height,
  dWidth = 1,
  dHeight = 1,
  pivot = [0, 0],
}) {
  const pivotX = -pivot[0] / width
  const pivotY = -pivot[1] / height

  const dx = width / dWidth
  const dy = height / dHeight

  const vertices = []
  for(let j = 0; j < dHeight; j++) {
    const y = (j / dHeight) + pivotY
    for(let i = 0; i < dWidth; i++) {
      const x = (i / dWidth) + pivotX
      vertices.push(...[
        x, y, 0,
        x, y + dy, 0,
        x + dx, y, 0,
        x + dx, y, 0,
        x, y + dy, 0,
        x + dx, y + dy, 0,
      ])
    }
  }

  return new Float32Array(vertices)
}