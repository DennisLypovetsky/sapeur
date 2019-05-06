/* global document */
'use strick';

let field = document.querySelector('.field');
let cells = field.querySelectorAll('.field__cell');

// console.log(cell)

for (let i = 0; i < cells.length; i++) {

  cells[i].addEventListener('click', function () {
    this.classList.add('field__cell--active');
  });
}

// let cellClick = function (cell) {
//   cell.addEventListener('click', function () {
//     console.log('Click!');
//   });
// };

// cellClick(cell);
