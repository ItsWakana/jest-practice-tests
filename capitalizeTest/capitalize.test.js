import { capitalize } from "./capitalize";

test('capitalize first letter of string', () => {
    expect(capitalize('john')).toBe('John');
});

test('capitalize first letter of string', () => {
    expect(capitalize('ronald')).toBe('Ronald');
});

test('capitalize first letter of string', () => {
    expect(capitalize('hello')).toBe('Hello');
});