function validateInput(value) {
  if (!/^[0-9A-Fa-f]{1,2}$/.test(value)) {
    throw new Error(`Invalid hex input: ${value}`);
  }
  return value;
}

function toHex(decimal) {
  return decimal.toString(16).toUpperCase();
}

function toDec(hex) {
  return parseInt(hex, 16);
}

function validateOutput(decimal) {
  if (decimal < 0) throw new Error('Result is negative');
  if (decimal > 0xFFFF) throw new Error('Result exceeds FFFF');
  return toHex(decimal);
}

function add(a, b) {
  validateInput(a);
  validateInput(b);
  return validateOutput(toDec(a) + toDec(b));
}

function subtract(a, b) {
  validateInput(a);
  validateInput(b);
  return validateOutput(toDec(a) - toDec(b));
}

function multiply(a, b) {
  validateInput(a);
  validateInput(b);
  return validateOutput(toDec(a) * toDec(b));
}

function divide(a, b) {
  validateInput(a);
  validateInput(b);
  if (toDec(b) === 0) throw new Error('Division by zero');
  return validateOutput(Math.floor(toDec(a) / toDec(b)));
}

function calculate(a, operator, b) {
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: throw new Error('Invalid operator');
  }
}

module.exports = { validateInput, add, subtract, multiply, divide, calculate };