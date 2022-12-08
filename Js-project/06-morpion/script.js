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

// algo
let morpion = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_'],
];

let turn = 0;
message.innerHTML = "C'est au joueur 1 de jouer";
function addPion(e) {
  this.removeEventListener('click', addPion);
  if (turn % 2 == 0) {
    turn++;
    message.innerHTML = "C'est au joueur 2 de jouer";
    e.target.innerHTML = 'X';
    if (e.target.value <= 2) morpion[0][e.target.value] = 'X';
    else if (e.target.value <= 5) morpion[1][e.target.value - 3] = 'X';
    else morpion[2][e.target.value - 6] = 'X';
    searchWinner();
  } else {
    turn++;
    message.innerHTML = "C'est au joueur 1 de jouer";
    e.target.innerHTML = 'O';
    if (e.target.value <= 2) morpion[0][e.target.value] = 'O';
    else if (e.target.value <= 5) morpion[1][e.target.value - 3] = 'O';
    else morpion[2][e.target.value - 6] = 'O';
    searchWinner();
  }
}

function searchWinner() {
  if (morpion[0][0] == 'X' && morpion[0][1] == 'X' && morpion[0][2] == 'X') message.innerHTML = 'Joueur 1 à gagné';
  if (morpion[1][0] == 'X' && morpion[1][1] == 'X' && morpion[1][2] == 'X') message.innerHTML = 'Joueur 1 à gagné';
  if (morpion[2][0] == 'X' && morpion[2][1] == 'X' && morpion[2][2] == 'X') message.innerHTML = 'Joueur 1 à gagné';

  if (morpion[0][0] == 'X' && morpion[1][0] == 'X' && morpion[2][0] == 'X') message.innerHTML = 'Joueur 1 à gagné';
  if (morpion[0][1] == 'X' && morpion[1][1] == 'X' && morpion[2][1] == 'X') message.innerHTML = 'Joueur 1 à gagné';
  if (morpion[0][2] == 'X' && morpion[1][2] == 'X' && morpion[2][2] == 'X') message.innerHTML = 'Joueur 1 à gagné';

  if (morpion[0][0] == 'X' && morpion[1][1] == 'X' && morpion[2][2] == 'X') message.innerHTML = 'Joueur 1 à gagné';
  if (morpion[2][0] == 'X' && morpion[1][1] == 'X' && morpion[0][2] == 'X') message.innerHTML = 'Joueur 1 à gagné';

  if (morpion[0][0] == 'O' && morpion[0][1] == 'O' && morpion[0][2] == 'O') message.innerHTML = 'Joueur 2 à gagné';
  if (morpion[1][0] == 'O' && morpion[1][1] == 'O' && morpion[1][2] == 'O') message.innerHTML = 'Joueur 2 à gagné';
  if (morpion[2][0] == 'O' && morpion[2][1] == 'O' && morpion[2][2] == 'O') message.innerHTML = 'Joueur 2 à gagné';

  if (morpion[0][0] == 'O' && morpion[1][0] == 'O' && morpion[2][0] == 'O') message.innerHTML = 'Joueur 2 à gagné';
  if (morpion[0][1] == 'O' && morpion[1][1] == 'O' && morpion[2][1] == 'O') message.innerHTML = 'Joueur 2 à gagné';
  if (morpion[0][2] == 'O' && morpion[1][2] == 'O' && morpion[2][2] == 'O') message.innerHTML = 'Joueur 2 à gagné';

  if (morpion[0][0] == 'O' && morpion[1][1] == 'O' && morpion[2][2] == 'O') message.innerHTML = 'Joueur 2 à gagné';
  if (morpion[2][0] == 'O' && morpion[1][1] == 'O' && morpion[0][2] == 'O') message.innerHTML = 'Joueur 2 à gagné';
}
