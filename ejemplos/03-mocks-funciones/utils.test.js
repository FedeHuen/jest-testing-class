const { processData, filterData, calculateTotal } = require('./utils');

describe('Mock functions', () => {
  describe('processData', () => {
    test('calls callback for each item', () => {
      const mockCallback = jest.fn(x => x * 2);
      const result = processData([1, 2, 3], mockCallback);
      
      // Verificar que se llamó la función
      expect(mockCallback).toHaveBeenCalled();
      expect(mockCallback).toHaveBeenCalledTimes(3);
      
      // Verificar los argumentos
      expect(mockCallback).toHaveBeenCalledWith(1);
      expect(mockCallback).toHaveBeenCalledWith(2);
      expect(mockCallback).toHaveBeenCalledWith(3);
      
      // Verificar el resultado
      expect(result).toEqual([2, 4, 6]);
    });

    test('tracks calls with mockReturnValue', () => {
      const mockFn = jest.fn();
      mockFn.mockReturnValue(42);
      
      expect(mockFn()).toBe(42);
      expect(mockFn()).toBe(42);
      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    test('tracks calls with mockReturnValueOnce', () => {
      const mockFn = jest.fn();
      mockFn
        .mockReturnValueOnce(10)
        .mockReturnValueOnce(20)
        .mockReturnValue(30);
      
      expect(mockFn()).toBe(10);
      expect(mockFn()).toBe(20);
      expect(mockFn()).toBe(30);
      expect(mockFn()).toBe(30);
    });
  });

  describe('filterData', () => {
    test('uses predicate function correctly', () => {
      const isEven = jest.fn(x => x % 2 === 0);
      const result = filterData([1, 2, 3, 4, 5], isEven);
      
      expect(isEven).toHaveBeenCalledTimes(5);
      expect(result).toEqual([2, 4]);
    });
  });

  describe('calculateTotal', () => {
    test('calculates total using getPrice function', () => {
      const getPrice = jest.fn(item => item.price);
      const items = [
        { id: 1, price: 10 },
        { id: 2, price: 20 },
        { id: 3, price: 30 }
      ];
      
      const total = calculateTotal(items, getPrice);
      
      expect(getPrice).toHaveBeenCalledTimes(3);
      expect(total).toBe(60);
    });
  });

  describe('Mock implementations', () => {
    test('mockImplementation', () => {
      const mockFn = jest.fn();
      mockFn.mockImplementation((a, b) => a + b);
      
      expect(mockFn(2, 3)).toBe(5);
      expect(mockFn(10, 20)).toBe(30);
    });

    test('mockImplementationOnce', () => {
      const mockFn = jest.fn();
      mockFn
        .mockImplementationOnce(() => 'first')
        .mockImplementationOnce(() => 'second')
        .mockImplementation(() => 'default');
      
      expect(mockFn()).toBe('first');
      expect(mockFn()).toBe('second');
      expect(mockFn()).toBe('default');
      expect(mockFn()).toBe('default');
    });
  });
});

