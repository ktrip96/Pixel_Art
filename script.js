function getColorValue() {
  // I use js Object destructuring to get the value of color
  let { value } = document.getElementById('color')
  return value
}

function getHeight() {
  // I use js Object destructuring to get the value of height
  let { value } = document.getElementById('height')
  return value
}

function getWidth() {
  // I use js Object destructuring to get the value of width
  let { value } = document.getElementById('width')
  return value
}

function createGrid() {
  // Get width and height
  const height = getHeight()
  const width = getWidth()
  console.log({ height, width })

  let grid = document.getElementById('grid')
  // each cell has 30px width and 30px height by default (this is my original assumption)
  // considering this assumption, I have to calculate how many cells
  // fit into the width and the height that were given by the user

  grid.style.width = width
  grid.style.height = height
  //   grid.style.gridTemplateRows = 'repeat(20, 1fr)'
  //   grid.style.gridTemplateColumns = 'repeat(20, 1fr)'

  console.log({ height, width })

  for (let i = 0; i < 100; i++) {
    let cell = document.createElement('div')
    cell.className = 'cell'
    grid.appendChild(cell)
  }
}
