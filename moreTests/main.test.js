import { findSmallest, findBiggest } from './main';

test('find the smaller number in array', () => {
    expect(findSmallest([5,4,8,9,3,6,12,55,2])).toBe(2);
});

test('find the biggest number in array', () => {
    expect(findBiggest([5,4,8,9,3,6,12,55,2])).toBe(55);
});

