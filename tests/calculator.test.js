const calculator = require('../src/calculator');

describe('Input Handling', () => {

  test('INP-01: rejects non-hex characters', () => {
    expect(() => calculator.validateInput('GG')).toThrow();
  });

  test('INP-02: rejects input longer than 2 digits', () => {
    expect(() => calculator.validateInput('FFF')).toThrow();
  });

  test('INP-03: accepts valid 2-digit hex input', () => {
    expect(() => calculator.validateInput('FF')).not.toThrow();
  });

});

describe('Arithmetic Operations', () => {

  test('OPS-01: adds two hex numbers', () => {
    expect(calculator.add('A', '5')).toBe('F');
  });

  test('OPS-02: subtracts two hex numbers', () => {
    expect(calculator.subtract('F', '5')).toBe('A');
  });

  test('OPS-03: multiplies two hex numbers', () => {
    expect(calculator.multiply('F', 'F')).toBe('E1');
  });

  test('OPS-04: divides two hex numbers', () => {
    expect(calculator.divide('F', '2')).toBe('7');
  });

});

describe('Output Handling', () => {

  test('OUT-01: returns result in hexadecimal', () => {
    const result = calculator.add('A', '5');
    expect(result).toMatch(/^[0-9A-Fa-f]+$/);
  });

  test('OUT-02: result within 4 hex digits', () => {
    expect(calculator.add('FF', 'FF')).toBe('1FE');
  });

  test('OUT-03: rejects negative results', () => {
    expect(() => calculator.subtract('5', 'A')).toThrow();
  });

});

describe('Error Handling', () => {

  test('ERR-01: throws error on division by zero', () => {
    expect(() => calculator.divide('A', '0')).toThrow();
  });

  test('ERR-02: throws error for invalid operator', () => {
    expect(() => calculator.calculate('A', '%', '5')).toThrow();
  });

  test('ERR-03: throws error for non-hex input in calculate', () => {
    expect(() => calculator.calculate('GG', '+', '5')).toThrow();
  });

});