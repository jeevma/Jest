const multiply = require('./multiply');

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const carStock = ['BMW', "Mercededs", "Audi", 'Ferrari', 'Lamborghini'];


describe('multiply test', () => {
    it ('multiply 2*3 should equal to 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });
    it ('multiply 2*3 should be greater than 5', () => {
        expect(multiply(2, 3)).toBeGreaterThan(5);
    });
    it ('multiply 2*3 should be less than 10', () => {
        expect(multiply(2, 3)).toBeLessThan(10);
    });
    it ('multiply 2*3 should be greater than and equal to 6', () => {
        expect(multiply(2, 3)).toBeGreaterThanOrEqual(4);
    });
    it ('multiply 2*3 should be less than and equal to 6', () => {
        expect(multiply(2, 3)).toBeLessThanOrEqual(6);
    });

    test('object example', ()=>{
        const data = {first: 1}
    data['second'] = 2;
    expect(data).toEqual({first: 1, second: 2});
    });

    it ('multiply 4*3 should not equal to 11', () => {
        expect(multiply(4, 3)).not.toBe(11);
    });

    test('null', ()=>{
        const a = null;
        expect(a).toBeNull();
        expect(a).toBeDefined();
        expect(a).not.toBeUndefined();
        expect(a).not.toBeTruthy();
        expect(a).toBeFalsy();
    });

it('car stock list has length of 5', () => {
    expect(carStock).toHaveLength(5);
})


it('car stock list has BMW', () => {
    expect(carStock).toContain('BMW');
})

});