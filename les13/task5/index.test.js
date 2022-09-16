import { reverseArray, withdraw, getAdults } from ".";

it('should get null', () => {
    const result = reverseArray(23);
    expect(result).toEqual(null);
});

it('should get reverse array', () => {
    const result = reverseArray([2, 3, 5, 1]);
    expect(result).toEqual([1, 5, 3, 2]);
});

it('should get reverse array with string', () => {
    const result = reverseArray(['Anna', -1, true]);
    expect(result).toEqual([true, -1, 'Anna']);
});

it('should get -1', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
    expect(result).toEqual(-1);
});

it('should get balance', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
    expect(result).toEqual(37);
});

it('should get balance zero', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 87);
    expect(result).toEqual(0);
});

it('should get object', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get empty object out', () => {
    const result = getAdults({ 'John Doe': 13, Tom: 17, Bob: 8 });
    expect(result).toEqual({});
});

it('should get empty object in', () => {
    const result = getAdults({});
    expect(result).toEqual({});
});