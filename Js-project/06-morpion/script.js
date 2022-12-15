//selecteur
const buttons = document.getElementsByTagName('button');
const message = document.querySelector('.message');
const resetBtn = document.querySelector('.reset');

//event
for (const button of buttons) {
  button.addEventListener('click', addPion);
}
resetBtn.addEventListener('click', reset);

// init
let morpion = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_'],
];

let turn = 0;
let winner = false;
message.innerHTML = "C'est au joueur 1 de jouer";

// function
function addPion() {
  resetBtn.style.display = 'block';
  this.removeEventListener('click', addPion);
  if (turn % 2 == 0) {
    turn++;
    message.innerHTML = "C'est au joueur 2 de jouer";
    this.innerHTML = 'X';
    if (this.dataset.cell <= 2) morpion[0][this.dataset.cell] = 'X';
    else if (this.dataset.cell <= 5) morpion[1][this.dataset.cell - 3] = 'X';
    else morpion[2][this.dataset.cell - 6] = 'X';

    searchWinner('X');
  } else {
    turn++;
    message.innerHTML = "C'est au joueur 1 de jouer";
    this.innerHTML = 'O';
    if (this.dataset.cell <= 2) morpion[0][this.dataset.cell] = 'O';
    else if (this.dataset.cell <= 5) morpion[1][this.dataset.cell - 3] = 'O';
    else morpion[2][this.dataset.cell - 6] = 'O';

    searchWinner('O');
  }

  if (turn == 9 && winner == false) {
    message.innerHTML = 'Match nul';

    for (const button of buttons) {
      button.disabled = true;
    }
  }
}

function searchWinner(figure) {
  if (morpion[0][0] == figure && morpion[0][1] == figure && morpion[0][2] == figure) {
    winner = true;
    p0.style.backgroundColor = 'lightgreen';
    p1.style.backgroundColor = 'lightgreen';
    p2.style.backgroundColor = 'lightgreen';
  }
  if (morpion[1][0] == figure && morpion[1][1] == figure && morpion[1][2] == figure) {
    winner = true;
    p3.style.backgroundColor = 'lightgreen';
    p4.style.backgroundColor = 'lightgreen';
    p5.style.backgroundColor = 'lightgreen';
  }
  if (morpion[2][0] == figure && morpion[2][1] == figure && morpion[2][2] == figure) {
    winner = true;
    p6.style.backgroundColor = 'lightgreen';
    p7.style.backgroundColor = 'lightgreen';
    p8.style.backgroundColor = 'lightgreen';
  }

  if (morpion[0][0] == figure && morpion[1][0] == figure && morpion[2][0] == figure) {
    winner = true;
    p0.style.backgroundColor = 'lightgreen';
    p3.style.backgroundColor = 'lightgreen';
    p6.style.backgroundColor = 'lightgreen';
  }

  if (morpion[0][1] == figure && morpion[1][1] == figure && morpion[2][1] == figure) {
    winner = true;
    p1.style.backgroundColor = 'lightgreen';
    p4.style.backgroundColor = 'lightgreen';
    p7.style.backgroundColor = 'lightgreen';
  }

  if (morpion[0][2] == figure && morpion[1][2] == figure && morpion[2][2] == figure) {
    winner = true;
    p2.style.backgroundColor = 'lightgreen';
    p5.style.backgroundColor = 'lightgreen';
    p8.style.backgroundColor = 'lightgreen';
  }

  if (morpion[0][0] == figure && morpion[1][1] == figure && morpion[2][2] == figure) {
    winner = true;
    p0.style.backgroundColor = 'lightgreen';
    p4.style.backgroundColor = 'lightgreen';
    p8.style.backgroundColor = 'lightgreen';
  }

  if (morpion[2][0] == figure && morpion[1][1] == figure && morpion[0][2] == figure) {
    winner = true;
    p6.style.backgroundColor = 'lightgreen';
    p4.style.backgroundColor = 'lightgreen';
    p2.style.backgroundColor = 'lightgreen';
  }

  if (winner) {
    for (const button of buttons) {
      button.disabled = true;
    }
    message.innerHTML = figure == 'X' ? 'Joueur 1 à gagné' : 'Joueur 2 à gagné';
  }
}

function reset() {
  //reinit le plateau
  morpion = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_'],
  ];
  turn = 0;
  winner = false;
  message.innerHTML = "C'est au joueur 1 de jouer";
  //reinit les bouttons

  for (const button of buttons) {
    button.disabled = false;
    button.innerHTML = '';
    button.style.backgroundColor = 'transparent';
    button.addEventListener('click', addPion);
  }

  resetBtn.style.display = 'none';
}
