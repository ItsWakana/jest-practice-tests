const reverseString = require('./reverseString');

test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse a string', () => {
    expect(reverseString('goodbye')).toBe('eybdoog');
});

test('reverse a string', () => {
    expect(reverseString('tomorrow')).toBe('worromot');
});