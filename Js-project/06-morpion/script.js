//selecteur
const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const message = document.querySelector('.message');
const resetBtn = document.querySelector('.reset');

//event
p0.addEventListener('click', addPion);
p1.addEventListener('click', addPion);
p2.addEventListener('click', addPion);
p3.addEventListener('click', addPion);
p4.addEventListener('click', addPion);
p5.addEventListener('click', addPion);
p6.addEventListener('click', addPion);
p7.addEventListener('click', addPion);
p8.addEventListener('click', addPion);
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
function addPion(e) {
  resetBtn.style.display = 'block';
  this.removeEventListener('click', addPion);
  if (turn % 2 == 0) {
    turn++;
    message.innerHTML = "C'est au joueur 2 de jouer";
    e.target.innerHTML = 'X';
    if (e.target.value <= 2) morpion[0][e.target.value] = 'X';
    else if (e.target.value <= 5) morpion[1][e.target.value - 3] = 'X';
    else morpion[2][e.target.value - 6] = 'X';

    searchWinner('X');
  } else {
    turn++;
    message.innerHTML = "C'est au joueur 1 de jouer";
    e.target.innerHTML = 'O';
    if (e.target.value <= 2) morpion[0][e.target.value] = 'O';
    else if (e.target.value <= 5) morpion[1][e.target.value - 3] = 'O';
    else morpion[2][e.target.value - 6] = 'O';

    searchWinner('O');
  }

  if (turn == 9 && winner == false) {
    message.innerHTML = 'Match nul';
    const buttons = document.getElementsByTagName('button');
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
    const buttons = document.getElementsByTagName('button');
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
  const buttons = document.getElementsByTagName('button');
  for (const button of buttons) {
    button.disabled = false;
    button.innerHTML = '';
    button.style.backgroundColor = 'buttonface';
  }
  p0.addEventListener('click', addPion);
  p1.addEventListener('click', addPion);
  p2.addEventListener('click', addPion);
  p3.addEventListener('click', addPion);
  p4.addEventListener('click', addPion);
  p5.addEventListener('click', addPion);
  p6.addEventListener('click', addPion);
  p7.addEventListener('click', addPion);
  p8.addEventListener('click', addPion);
  resetBtn.style.display = 'none';
}
