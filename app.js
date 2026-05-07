// State
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let isEnteringSecond = false;

// DOM elements
const display = document.getElementById('display');
const expression = document.getElementById('expression');

// Display helpers
function updateDisplay(value) {
  display.textContent = value;
}

function updateExpression(value) {
  expression.textContent = value;
}

// Handle digit or hex letter input
function handleDigit(value) {
  if (!isEnteringSecond) {
    if (firstOperand.length >= 2) return;
    firstOperand += value;
    updateDisplay(firstOperand);
    updateExpression(firstOperand);
  } else {
    if (secondOperand.length >= 2) return;
    secondOperand += value;
    updateDisplay(secondOperand);
    updateExpression(firstOperand + ' ' + currentOperator + ' ' + secondOperand);
  }
}

// Handle operator selection
function handleOperator(operator) {
  if (firstOperand === '') return;
  currentOperator = operator;
  isEnteringSecond = true;
  updateExpression(firstOperand + ' ' + operator);
}

// Handle equals
function handleEquals() {
  if (firstOperand === '' || secondOperand === '' || currentOperator === null) return;

  try {
    const result = calculate(firstOperand, currentOperator, secondOperand);
    updateExpression(firstOperand + ' ' + currentOperator + ' ' + secondOperand + ' =');
    updateDisplay(result);
    firstOperand = result;
    secondOperand = '';
    currentOperator = null;
    isEnteringSecond = false;
  } catch (error) {
    updateDisplay('ERROR');
    updateExpression(error.message);
    resetState();
  }
}

// Reset state
function resetState() {
  firstOperand = '';
  secondOperand = '';
  currentOperator = null;
  isEnteringSecond = false;
}

// Handle clear
function handleClear() {
  resetState();
  updateDisplay('0');
  updateExpression('');
}

// Handle backspace
function handleBackspace() {
  if (!isEnteringSecond) {
    firstOperand = firstOperand.slice(0, -1);
    updateDisplay(firstOperand || '0');
    updateExpression(firstOperand);
  } else {
    secondOperand = secondOperand.slice(0, -1);
    updateDisplay(secondOperand || '0');
    updateExpression(firstOperand + ' ' + currentOperator + ' ' + secondOperand);
  }
}

// Calculator logic
function calculate(a, operator, b) {
  const ops = {
    '+': (x, y) => {
      const result = parseInt(x, 16) + parseInt(y, 16);
      if (result < 0) throw new Error('Negative result');
      if (result > 0xFFFF) throw new Error('Result exceeds FFFF');
      return result.toString(16).toUpperCase();
    },
    '-': (x, y) => {
      const result = parseInt(x, 16) - parseInt(y, 16);
      if (result < 0) throw new Error('Negative result');
      if (result > 0xFFFF) throw new Error('Result exceeds FFFF');
      return result.toString(16).toUpperCase();
    },
    '*': (x, y) => {
      const result = parseInt(x, 16) * parseInt(y, 16);
      if (result < 0) throw new Error('Negative result');
      if (result > 0xFFFF) throw new Error('Result exceeds FFFF');
      return result.toString(16).toUpperCase();
    },
    '/': (x, y) => {
      if (parseInt(y, 16) === 0) throw new Error('Division by zero');
      const result = Math.floor(parseInt(x, 16) / parseInt(y, 16));
      if (result < 0) throw new Error('Negative result');
      return result.toString(16).toUpperCase();
    }
  };
  if (!ops[operator]) throw new Error('Invalid operator');
  return ops[operator](a, b);
}

// Event listeners
document.querySelectorAll('[data-value]').forEach(button => {
  button.addEventListener('click', () => {
    handleDigit(button.dataset.value);
  });
});

document.querySelectorAll('[data-operator]').forEach(button => {
  button.addEventListener('click', () => {
    handleOperator(button.dataset.operator);
  });
});

document.getElementById('equals').addEventListener('click', handleEquals);
document.getElementById('clear').addEventListener('click', handleClear);
document.getElementById('backspace').addEventListener('click', handleBackspace);