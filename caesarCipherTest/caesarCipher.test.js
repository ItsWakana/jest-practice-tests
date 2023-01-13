const caesarCipher = require('./caesarCipher');

test('test with simple strings', () => {
    expect(caesarCipher('abcde', 1)).toBe('bcdef');
});

test('test with simple strings', () => {
    expect(caesarCipher('tomorrow', 5)).toBe('ytrtwwtb');
});

test('test with punctuation', () => {
    expect(caesarCipher('hey, how are you?', 9)).toBe('qnh, qxf jan hxd?');
});