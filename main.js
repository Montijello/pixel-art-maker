function clickableGrid(rows, cols, callback, className = 'grid') {
  let index = 0;
  let grid = document.createElement('table');
  grid.className = className;
  for (let r = 0; r < rows; ++r) {
    let tr = grid.appendChild(document.createElement('tr'));
    for (let c = 0; c < cols; ++c) {
      let cell = tr.appendChild(document.createElement('td'));
      cell.id = ++index;
      cell.classList.add(`r${r}`, `c${c}`, 'unpainted');
      cell.addEventListener('click', (function (element, r, c, index) {
        return function () {
          callback(element, r, c, index);
        }
      })(cell, r, c, index), false);
    }
  }
  return grid;
}

let brushColor = document.querySelector('#colorSelector').value
let currentColor

let canvas = clickableGrid(10, 10, function (element) {
  element.style.backgroundColor = brushColor
}, 'canvas')

document.body.appendChild(canvas);