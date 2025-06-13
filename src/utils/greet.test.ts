import { greet } from './greet';

describe('greet function', () => {
  test('should return greeting message', () => {
    const result = greet('World');
    expect(result).toBe('Hello, World!');
  });

  test('should handle different names', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
    expect(greet('Bob')).toBe('Hello, Bob!');
  });

  test('should throw error for empty name', () => {
    expect(() => greet('')).toThrow('Name cannot be empty');
    expect(() => greet('   ')).toThrow('Name cannot be empty');
  });

  test('should handle names with spaces', () => {
    expect(greet('John Doe')).toBe('Hello, John Doe!');
  });
});
