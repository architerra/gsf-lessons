import getMinSquaredNumber from "./getMinSquaredNumber";

it('should get square', () => {
    const result = getMinSquaredNumber([2, -3, 10.1]);
    expect(result).toEqual(4);
});

it('should get null array', () => {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
});

it('should get null string', () => {
    const result = getMinSquaredNumber('sdf');
    expect(result).toEqual(null);
});