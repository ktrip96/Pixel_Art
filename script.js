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

  // each cell has 30px width and 30px height by default (this is my original assumption)
  // considering this assumption, I have to calculate how many cells
  // fit into the width and the height that were given by the user

  const gridRows = Math.floor(height / 30)
  const gridColumns = Math.floor(width / 30)

  // I used Math.floor because if the user gives 55px width, I want to display only one cell.
  // However if the user gives 60px width, I will display 2 cells.
  // This is my own assumption for this problem. I could solve it in many other ways.
  // For example, I could change the cell size according to the user input for height and width.
  // But I decided that its more beautiful if the cell remains fixed size.

  let grid = document.getElementById('grid')
  //   grid.style.width = width
  //   grid.style.height = height
  grid.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`
  grid.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`

  console.log({ height, width })
  console.log({ gridRows, gridColumns })

  const totalCells = gridRows * gridColumns

  for (let i = 0; i < totalCells; i++) {
    let cell = document.createElement('div')
    cell.className = 'cell'
    grid.appendChild(cell)
  }
}
