const calculator = require('./calculator');

test('Add numbers', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('Subtract numbers', () => {
    expect(calculator.subtract(5,4)).toBe(1);
});

test('Divide numbers', () => {
    expect(calculator.divide(10,2)).toBe(5);
});

test('Multiply numbers', () => {
    expect(calculator.multiply(10,100)).toBe(1000);
});