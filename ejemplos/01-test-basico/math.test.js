import { sum, subtract, multiply, divide, calculateTotal } from './math';

describe('Math functions', () => {
  describe('sum', () => {
    test('adds two positive numbers correctly', () => {
      expect(typeof sum(2, 3)).toBe('number');
      expect(sum(2, 3)).toBe(5);
    });

    test('adds negative numbers correctly', () => {
      expect(sum(-1, 1)).toBe(0);
      expect(sum(-5, -3)).toBe(-8);
    });

    test('adds zero correctly', () => {
      expect(sum(0, 0)).toBe(0);
      expect(sum(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(10, 7)).toBe(3);
    });

    test('handles negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(-2, 5)).toBe(-10);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(15, 3)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('calculateTotal', () => {
    test('calculates total of array of numbers', () => {
      expect(calculateTotal([10, 20, 30])).toBe(60);
      expect(calculateTotal([1, 2, 3, 4, 5])).toBe(15);
    });

    test('returns 0 for empty array', () => {
      expect(calculateTotal([])).toBe(0);
    });

    test('throws error for non-array input', () => {
      expect(() => calculateTotal('not an array')).toThrow('Items must be an array');
      expect(() => calculateTotal(null)).toThrow('Items must be an array');
    });
  });
});

