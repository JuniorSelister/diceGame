const btnClick = document.getElementById('click');
const btnReset = document.getElementById('clean');

function createDiceP1(number) {
  switch (number) {
    case 1: 
      diceOneP1();
      console.log(number);
      break;
    case 2:
      diceTwoP1();
      console.log(number);
      break;
    case 3:
      diceThreeP1();
      console.log(number);
      break;
    case 4:
      diceFourP1();
      console.log(number);
      break;
    case 5:
      diceFiveP1();
      console.log(number);
      break;
    case 6:
      diceSixP1();
      console.log(number);
      break;
    default:
      console.log("not found");
  }
}

function createDiceP2(number) {
  switch (number) {
    case 1: 
      diceOneP2();
      console.log(number);
      break;
    case 2:
      diceTwoP2();
      console.log(number);
      break;
    case 3:
      diceThreeP2();
      console.log(number);
      break;
    case 4:
      diceFourP2();
      console.log(number);
      break;
    case 5:
      diceFiveP2();
      console.log(number);
      break;
    case 6:
      diceSixP2();
      console.log(number);
      break;
    default:
      console.log("not found");
  }
}

function diceOneP1() {
  const divElement1 = document.getElementById('dice1');
  divElement1.classList.add('dice', 'first-face');
  
  let dotElement = document.createElement('span');
  dotElement.classList.add('dot');
  
  divElement1.appendChild(dotElement);
}

function diceTwoP1() {
  const divElement1 = document.getElementById('dice1');
  divElement1.classList.add('dice', 'second-face');
  
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  
  divElement1.appendChild(dotElement1);
  divElement1.appendChild(dotElement2);
}

function diceThreeP1() {
  const divElement1 = document.getElementById('dice1');
  divElement1.classList.add('dice', 'third-face');
  
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  let dotElement3 = document.createElement('span');
  dotElement3.classList.add('dot');
  
  divElement1.appendChild(dotElement1);
  divElement1.appendChild(dotElement2);
  divElement1.appendChild(dotElement3);
}
  
function diceFourP1() {
  const divElement1 = document.getElementById('dice1');
  divElement1.classList.add('dice', 'fourth-face');
  
  let divColElement1 = document.createElement('div');
  divColElement1.classList.add('column');
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  
  let divColElement2 = document.createElement('div');
  divColElement2.classList.add('column');
  let dotElement3 = document.createElement('span');
  dotElement3.classList.add('dot');
  let dotElement4 = document.createElement('span');
  dotElement4.classList.add('dot');
  
  divColElement1.appendChild(dotElement1)
  divColElement1.appendChild(dotElement2)
  divColElement2.appendChild(dotElement3)
  divColElement2.appendChild(dotElement4)

  divElement1.appendChild(divColElement1);
  divElement1.appendChild(divColElement2);
}

function diceFiveP1() {
  const divElement1 = document.getElementById('dice1');
  divElement1.classList.add('dice', 'fifth-face');
  
  let divColElement1 = document.createElement('div');
  divColElement1.classList.add('column');
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  
  let divColElement2 = document.createElement('div');
  divColElement2.classList.add('column');
  let dotElement3 = document.createElement('span');
  dotElement3.classList.add('dot');
  
  let divColElement3 = document.createElement('div');
  divColElement3.classList.add('column');
  let dotElement4 = document.createElement('span');
  dotElement4.classList.add('dot');
  let dotElement5 = document.createElement('span');
  dotElement5.classList.add('dot');
  
  divColElement1.appendChild(dotElement1)
  divColElement1.appendChild(dotElement2)
  divColElement2.appendChild(dotElement3)
  divColElement3.appendChild(dotElement4)
  divColElement3.appendChild(dotElement5)

  divElement1.appendChild(divColElement1);
  divElement1.appendChild(divColElement2);
  divElement1.appendChild(divColElement3);
}

function diceSixP1() {
  const divElement1 = document.getElementById('dice1');
  divElement1.classList.add('dice', 'sixth-face');

  let divColElement1 = document.createElement('div');
  divColElement1.classList.add('column');
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  let dotElement3 = document.createElement('span');
  dotElement3.classList.add('dot');
  
  let divColElement2 = document.createElement('div');
  divColElement2.classList.add('column');
  let dotElement4 = document.createElement('span');
  dotElement4.classList.add('dot');
  let dotElement5 = document.createElement('span');
  dotElement5.classList.add('dot');
  let dotElement6 = document.createElement('span');
  dotElement6.classList.add('dot');
  
  divColElement1.appendChild(dotElement1)
  divColElement1.appendChild(dotElement2)
  divColElement1.appendChild(dotElement3)
  divColElement2.appendChild(dotElement4)
  divColElement2.appendChild(dotElement5)
  divColElement2.appendChild(dotElement6)

  divElement1.appendChild(divColElement1);
  divElement1.appendChild(divColElement2);
}

function diceOneP2() {
  const divElement1 = document.getElementById('dice2');
  divElement1.classList.add('dice', 'first-face');
  
  let dotElement = document.createElement('span');
  dotElement.classList.add('dot');
  
  divElement1.appendChild(dotElement);
}

function diceTwoP2() {
  const divElement1 = document.getElementById('dice2');
  divElement1.classList.add('dice', 'second-face');
  
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  
  divElement1.appendChild(dotElement1);
  divElement1.appendChild(dotElement2);
}

function diceThreeP2() {
  const divElement1 = document.getElementById('dice2');
  divElement1.classList.add('dice', 'third-face');
  
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  let dotElement3 = document.createElement('span');
  dotElement3.classList.add('dot');
  
  divElement1.appendChild(dotElement1);
  divElement1.appendChild(dotElement2);
  divElement1.appendChild(dotElement3);
}
  
function diceFourP2() {
  const divElement1 = document.getElementById('dice2');
  divElement1.classList.add('dice', 'fourth-face');
  
  let divColElement1 = document.createElement('div');
  divColElement1.classList.add('column');
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  
  let divColElement2 = document.createElement('div');
  divColElement2.classList.add('column');
  let dotElement3 = document.createElement('span');
  dotElement3.classList.add('dot');
  let dotElement4 = document.createElement('span');
  dotElement4.classList.add('dot');
  
  divColElement1.appendChild(dotElement1)
  divColElement1.appendChild(dotElement2)
  divColElement2.appendChild(dotElement3)
  divColElement2.appendChild(dotElement4)

  divElement1.appendChild(divColElement1);
  divElement1.appendChild(divColElement2);
}

function diceFiveP2() {
  const divElement1 = document.getElementById('dice2');
  divElement1.classList.add('dice', 'fifth-face');
  
  let divColElement1 = document.createElement('div');
  divColElement1.classList.add('column');
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  
  let divColElement2 = document.createElement('div');
  divColElement2.classList.add('column');
  let dotElement3 = document.createElement('span');
  dotElement3.classList.add('dot');
  
  let divColElement3 = document.createElement('div');
  divColElement3.classList.add('column');
  let dotElement4 = document.createElement('span');
  dotElement4.classList.add('dot');
  let dotElement5 = document.createElement('span');
  dotElement5.classList.add('dot');
  
  divColElement1.appendChild(dotElement1)
  divColElement1.appendChild(dotElement2)
  divColElement2.appendChild(dotElement3)
  divColElement3.appendChild(dotElement4)
  divColElement3.appendChild(dotElement5)

  divElement1.appendChild(divColElement1);
  divElement1.appendChild(divColElement2);
  divElement1.appendChild(divColElement3);
}

function diceSixP2() {
  const divElement1 = document.getElementById('dice2');
  divElement1.classList.add('dice', 'sixth-face');

  let divColElement1 = document.createElement('div');
  divColElement1.classList.add('column');
  let dotElement1 = document.createElement('span');
  dotElement1.classList.add('dot');
  let dotElement2 = document.createElement('span');
  dotElement2.classList.add('dot');
  let dotElement3 = document.createElement('span');
  dotElement3.classList.add('dot');
  
  let divColElement2 = document.createElement('div');
  divColElement2.classList.add('column');
  let dotElement4 = document.createElement('span');
  dotElement4.classList.add('dot');
  let dotElement5 = document.createElement('span');
  dotElement5.classList.add('dot');
  let dotElement6 = document.createElement('span');
  dotElement6.classList.add('dot');
  
  divColElement1.appendChild(dotElement1)
  divColElement1.appendChild(dotElement2)
  divColElement1.appendChild(dotElement3)
  divColElement2.appendChild(dotElement4)
  divColElement2.appendChild(dotElement5)
  divColElement2.appendChild(dotElement6)

  divElement1.appendChild(divColElement1);
  divElement1.appendChild(divColElement2);
}

btnClick.addEventListener('click', () => {
  let gamer1 = Math.floor(Math.random() * 6) + 1;
  let gamer2 = Math.floor(Math.random() * 6) + 1;
  
  let gamer1Rotation = document.getElementById('dice1')
  let gamer2Rotation = document.getElementById('dice2')

  gamer1Rotation = createDiceP1(gamer1);
  gamer2Rotation = createDiceP2(gamer2);
  
  if (gamer1 == gamer2) {
    document.getElementById('score').innerHTML = "It's a tie";
  } else if (gamer1 > gamer2) {
    document.getElementById('score').innerHTML = "Gamer 1 wins";
  } else {
    document.getElementById('score').innerHTML = "Gamer 2 wins";
  }

  document.getElementById('clean').removeAttribute('disabled');
  document.getElementById('click').setAttribute('disabled', "");
});
 
btnReset.addEventListener('click', () => {
  
  const default1 = document.getElementById('dice1');
  const default2 = document.getElementById('dice2');

  default1.remove();
  default2.remove();

  const board1 = document.createElement('div');
  board1.setAttribute('id', 'dice1');

  const board2 = document.createElement('div');
  board2.setAttribute('id', 'dice2');

  document.getElementById('board-one').appendChild(board1);
  document.getElementById('board-two').appendChild(board2);

  document.getElementById('score').innerHTML = "";

  document.getElementById('click').removeAttribute('disabled');
  document.getElementById('clean').setAttribute('disabled', "");
});
