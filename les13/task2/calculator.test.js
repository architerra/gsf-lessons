import getSum, { getSquaredNumbers, getOddNumbers } from './calculator';

it('should get squared', () => {
    const result = getSquaredNumbers([2, 3]);
    expect(result).toEqual([4, 9]);
});

it('should keep odd', () => {
    const result = getOddNumbers([1, 2, 3]);
    expect(result).toEqual([1, 3]);
});

it('should get sum', () => {
    const result = getSum(2, 3);
    expect(result).toEqual(5);
});