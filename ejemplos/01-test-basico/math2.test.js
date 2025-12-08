import math2 from './math2';
describe('Math functions 2', () => {
    describe('sum', () => {
      test('adds two positive numbers correctly', () => {
        expect(math2.sum(2, 3)).toBe(5);
      });
  
      test('adds negative numbers correctly', () => {
        expect(math2.sum(-1, 1)).toBe(0);
        expect(math2.sum(-5, -3)).toBe(-8);
      });
  
      test('adds zero correctly', () => {
        expect(math2.sum(0, 0)).toBe(0);
        expect(math2.sum(5, 0)).toBe(5);
      });
    });
  
    describe('subtract', () => {
      test('subtracts two numbers correctly', () => {
        expect(math2.subtract(5, 3)).toBe(2);
        expect(math2.subtract(10, 7)).toBe(3);
      });
  
      test('handles negative results', () => {
        expect(math2.subtract(3, 5)).toBe(-2);
      });
    });
  
    describe('multiply', () => {
      test('multiplies two numbers correctly', () => {
        expect(math2.multiply(3, 4)).toBe(12);
        expect(math2.multiply(-2, 5)).toBe(-10);
      });
  
      test('multiplies by zero', () => {
        expect(math2.multiply(5, 0)).toBe(0);
      });
    });
  
    describe('divide', () => {
      test('divides two numbers correctly', () => {
        expect(math2.divide(10, 2)).toBe(5);
        expect(math2.divide(15, 3)).toBe(5);
      });
  
      test('throws error when dividing by zero', () => {
        expect(() => math2.divide(10, 0)).toThrow('Division by zero is not allowed');
      });
    });
  
    describe('calculateTotal', () => {
      test('calculates total of array of numbers', () => {
        expect(math2.calculateTotal([10, 20, 30])).toBe(60);
        expect(math2.calculateTotal([1, 2, 3, 4, 5])).toBe(15);
      });
  
      test('returns 0 for empty array', () => {
        expect(math2.calculateTotal([])).toBe(0);
      });
  
      test('throws error for non-array input', () => {
        expect(() => math2.calculateTotal('not an array')).toThrow('Items must be an array');
        expect(() => math2.calculateTotal(null)).toThrow('Items must be an array');
      });
    });
  });