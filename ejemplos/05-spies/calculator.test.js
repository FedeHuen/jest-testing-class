const { Calculator, processCalculation } = require('./calculator');

describe('Spies', () => {
  describe('Spy on object methods', () => {
    test('spy on add method', () => {
      const calc = new Calculator();
      const addSpy = jest.spyOn(calc, 'add');
      
      const result = calc.add(2, 3);
      
      expect(addSpy).toHaveBeenCalled();
      expect(addSpy).toHaveBeenCalledWith(2, 3);
      expect(addSpy).toHaveReturnedWith(5);
      expect(result).toBe(5);
      
      addSpy.mockRestore();
    });

    test('spy can override implementation', () => {
      const calc = new Calculator();
      const multiplySpy = jest.spyOn(calc, 'multiply');
      multiplySpy.mockImplementation(() => 100);
      
      expect(calc.multiply(2, 3)).toBe(100);
      expect(multiplySpy).toHaveBeenCalledWith(2, 3);
      
      multiplySpy.mockRestore();
    });
  });

  describe('Spy on global functions', () => {
    test('spy on console.log', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      console.log('test message');
      console.log('another message');
      
      expect(consoleSpy).toHaveBeenCalledTimes(2);
      expect(consoleSpy).toHaveBeenCalledWith('test message');
      expect(consoleSpy).toHaveBeenCalledWith('another message');
      
      consoleSpy.mockRestore();
    });
  });

  describe('Spy in function calls', () => {
    test('spy on method called inside function', () => {
      const calc = new Calculator();
      const addSpy = jest.spyOn(calc, 'add');
      
      const result = processCalculation(5, 3, (calc, a, b) => calc.add(a, b));
      
      expect(addSpy).toHaveBeenCalledWith(5, 3);
      expect(result).toBe(8);
      
      addSpy.mockRestore();
    });
  });

  describe('Spy cleanup', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('spies are cleaned up', () => {
      const calc = new Calculator();
      const spy = jest.spyOn(calc, 'add');
      
      calc.add(1, 2);
      expect(spy).toHaveBeenCalled();
    });
  });
});

