import { Calculadora, procesarCalculo } from './calculadora';

describe('Spies', () => {
  describe('Spy en métodos de objetos', () => {
    test('spy en el método sumar', () => {
      const calc = new Calculadora();
      const spySumar = jest.spyOn(calc, 'sumar');
      
      const resultado = calc.sumar(2, 3);
      
      expect(spySumar).toHaveBeenCalled();
      expect(spySumar).toHaveBeenCalledWith(2, 3);
      expect(spySumar).toHaveReturnedWith(5);
      expect(resultado).toBe(5);
      
      spySumar.mockRestore();
    });

    test('spy puede sobrescribir la implementación', () => {
      const calc = new Calculadora();
      const spyMultiplicar = jest.spyOn(calc, 'multiplicar');
      spyMultiplicar.mockImplementation(() => 100);
      
      expect(calc.multiplicar(2, 3)).toBe(100);
      expect(spyMultiplicar).toHaveBeenCalledWith(2, 3);
      
      spyMultiplicar.mockRestore();
    });
  });

  describe('Spy en funciones globales', () => {
    test('spy en console.log', () => {
      const spyConsole = jest.spyOn(console, 'log').mockImplementation(() => {});
      
      console.log('test message');
      console.log('another message');
      
      expect(spyConsole).toHaveBeenCalledTimes(2);
      expect(spyConsole).toHaveBeenCalledWith('test message');
      expect(spyConsole).toHaveBeenCalledWith('another message');
      
      spyConsole.mockRestore();
    });
  });

  describe('Spy en llamadas de funciones', () => {
    test('spy en método llamado dentro de una función', () => {
      const calc = new Calculadora();
      const spySumar = jest.spyOn(Calculadora.prototype, 'sumar');
      
      const resultado = procesarCalculo(5, 3, (calc, a, b) => calc.sumar(a, b));
      
      expect(spySumar).toHaveBeenCalledWith(5, 3);
      expect(resultado).toBe(8);
      
      spySumar.mockRestore();
    });
  });

  describe('Limpieza de spies', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('los spies se limpian', () => {
      const calc = new Calculadora();
      const spy = jest.spyOn(calc, 'sumar');
      
      calc.sumar(1, 2);
      expect(spy).toHaveBeenCalled();
    });
  });
});

