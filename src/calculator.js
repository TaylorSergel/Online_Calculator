//INPUT VALIDATION 

function validateInput(value) {
    if (!/^[0-9A-Fa-f]{1,2}$/.test(value)) {
        throw new Error ('Invalid hex input: ${value}');
    }
    return value;
}

//OUTPUT VALIDATION

function validateOutput(value) {
    if (value < 0) throw new Error('Result is negative');
    if (value > 0xFFF) throw new Error('Result exceeds valid output range');
    return toHex(value);
}

//HELPER FUNCTIONS

function toHex(decimal) {
    return decimal.toString(16).toUpperCase();
}

function toDec(hex) {
    return parseInt(hex, 16);
}

//ARITHMETIC OPERATIONS

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
    const ops = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    };
    if (!ops[operator]) throw new Error('Invalid operator: ${operator}');
    return ops[operator](a, b);
}

//EXPORTS
module.exports = {validateInput, validateOutput, add, subtract, multiply, divide};