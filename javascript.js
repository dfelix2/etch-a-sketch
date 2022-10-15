const container = document.getElementById("container");
const userChoiceDisplay =document.getElementById('userChoiceDisplay');
const userGridDisplay = document.createElement('h1');

userChoiceDisplay.append(userGridDisplay);

let scale;
let userGrid;
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
  deleteGrid();
  scale = prompt("Set Scale Size");
    if(scale > 100) {
      return;
    }
  userGrid = scale;
  userGridDisplay.textContent = 'Grid Size: ' + userGrid + 'x' + userGrid;
  makeRows(userGrid, userGrid);
});

let cell;
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols); 
  for (c = 0; c < (rows * cols); c++) {
   cell = document.createElement("div");
    container.appendChild(cell).id = "grid-item";
  };
};

function deleteGrid() {
  let cell = document.querySelectorAll("#grid-item");
  cell.forEach(cell => {
    container.removeChild(cell).id = "grid-item";
  });
}



container.addEventListener('mouseover', e => {
  var target = e.target

  if (target !== container) {
    target.classList.add('permahover')
  }
})


container.addEventListener('mouseover', e => {
  var target = e.target

  if (target !== container) {
    target.classList.add('permahover')
  }
})