import { calc }  from "./calculator";

it('should get null', () => {
    const result = calc(23);
    expect(result).toEqual(null);
});

it('should get sum', () => {
    const result = calc('4 + 2');
    expect(result).toEqual('4 + 2 = 6');
});

it('should get difference', () => {
    const result = calc('4 - 2');
    expect(result).toEqual('4 - 2 = 2');
});

it('should get product', () => {
    const result = calc('4 * 2');
    expect(result).toEqual('4 * 2 = 8');
});

it('should get quotient', () => {
    const result = calc('4 / 2');
    expect(result).toEqual('4 / 2 = 2');
});