const multiply = require('./multiply');

describe('multiply test', () => {
    it ('multiply 2*3 should equal to 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('object example', ()=>{
        const data = {first: 1}
    data['second'] = 2;
    expect(data).toEqual({first: 1, second: 2});
    });

    it ('multiply 4*3 should not equal to 11', () => {
        expect(multiply(4, 3)).not.toBe(11);
    });
});