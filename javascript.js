const container = document.getElementById("container");



let cell;
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols); 
  for (c = 0; c < (rows * cols); c++) {
   cell = document.createElement("div");
    cell.textContent = '';
    container.appendChild(cell).id = "grid-item";
  };
};

makeRows(16, 16);


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