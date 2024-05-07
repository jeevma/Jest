const multiply = require('./multiply');

describe('multiply', () => {
    it ('multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});