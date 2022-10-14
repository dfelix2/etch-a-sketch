const container = document.getElementById("container");



let cell;
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols); 
  for (c = 0; c < (rows * cols); c++) {
   cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).id = "grid-item";
  };
};

makeRows(16, 16);

document.getElementById("grid-item").onmouseover = function() {mouseOver()};
document.getElementById("grid-item").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("grid-item").style.backgroundColor = "red";
  }
  
  function mouseOut() {
    document.getElementsById("grid-item").style.backgroundColor = "black";
  }

