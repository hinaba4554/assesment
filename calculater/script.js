
// upper output is for showing value

let outputUpper = document.querySelector('#upper');
// lower output is for showing the result
let outputLower = document.querySelector('#lower');

// function to get number input
function EnterNumber(e) {
  if (outputLower.innerHTML === '0') {
    outputLower.innerHTML = e.innerHTML;
  } else {
    outputLower.innerHTML += e.innerHTML;
  }
}

// clear all
function AllClear() {
  outputUpper.innerHTML = '';
  outputLower.innerHTML = '0';
}
// calculate button
function Equal(){
  let exp = outputLower.innerHTML;
  outputUpper.innerHTML = exp;
  exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
  let result;
  try {
    result = eval(exp);
    // if decimal number more than 4 decimal places
    if (result.toString().indexOf('.') !== -1) {
      result = result.toFixed(4);
    }
  } catch (e) {
    result = 'Error';
  }
  outputLower.innerHTML = result;
}

function Operator(e) {
  // check last operator
  let lastOperator = outputLower.innerHTML.slice(-1);
  if (lastOperator.includes('+', '-', '×', '÷')) {
    output.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else {
    outputLower.innerHTML += e.innerHTML;
  }
}

function Dot() {
  outputLower.innerHTML += '.';
}

function Bracket(e) {
  outputLower.innerHTML += e.innerHTML;
}

// attach keyboard event
document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case '0':
        EnterNumber(document.querySelector('button:nth-child(2)'));
      break;
    case '1':
        EnterNumber(document.querySelector('button:nth-child(5)'));
      break;
    case '2':
        EnterNumber(document.querySelector('button:nth-child(6)'));
      break;
    case '3':
        EnterNumbe(document.querySelector('button:nth-child(7)'));
      break;
    case '4':
        EnterNumber(document.querySelector('button:nth-child(9)'));
      break;
    case '5':
        EnterNumber(document.querySelector('button:nth-child(10)'));
      break;
    case '6':
        EnterNumber(document.querySelector('button:nth-child(11)'));
      break;
    case '7':
        EnterNumber(document.querySelector('button:nth-child(13)'));
      break;
    case '8':
        EnterNumber(document.querySelector('button:nth-child(14)'));
      break;
    case '9':
        EnterNumber(document.querySelector('button:nth-child(15)'));
      break;
    case '+':
        EnterNumber(document.querySelector('button:nth-child(4)'));
      break;
    case '-':
        EnterNumber(document.querySelector('button:nth-child(8)'));
      break;
    case '*':
        EnterNumber(document.querySelector('button:nth-child(12)'));
      break;
    case '/':
        EnterNumber(document.querySelector('button:nth-child(16)'));
      break;
    case '.':
      pressDot();
      break;
    case '(':
      pressBracket(document.querySelector('button:nth-child(18)'));
      break;
    case ')':
      pressBracket(document.querySelector('button:nth-child(19)'));
      break;
    case 'Enter':
      // prevent default action
      e.preventDefault();
      Equal();
      break;
    case 'Backspace':
      Clear();
      break;
    case 'Escape':
      AllClear();
      break;
  }
});