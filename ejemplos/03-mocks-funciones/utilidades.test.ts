import { procesarDatos, filtrarDatos } from './utilidades';
const funcion = (x: number) => x * 2;
describe('Funciones mock', () => {
  describe('procesarDatos', () => {
    test('llama al callback para cada item', () => {
      const callbackMock = jest.fn(funcion);
      const resultado = procesarDatos([3, 2, 1], callbackMock);
   
      expect(callbackMock).toHaveBeenCalled();
      expect(callbackMock).toHaveBeenCalledTimes(3);

      expect(callbackMock).toHaveBeenCalledWith(1);
      expect(callbackMock).toHaveBeenCalledWith(2);
      expect(callbackMock).toHaveBeenCalledWith(3);
      expect(resultado).toEqual([6, 4, 2]);
    });

    test('rastrea llamadas con mockReturnValue', () => {
      const funcionMock = jest.fn(() => 0);
      funcionMock.mockReturnValue(42);
      
      expect(funcionMock()).toBe(42);
      expect(funcionMock).toHaveBeenCalledTimes(1);
    });

    test('rastrea llamadas con mockReturnValueOnce', () => {
      const funcionMock = jest.fn(() => 0);
      funcionMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce(20)
        .mockReturnValueOnce(30)
        .mockReturnValue(40);
      
      expect(funcionMock()).toBe(10);
      expect(funcionMock()).toBe(20);
      expect(funcionMock()).toBe(30);
      expect(funcionMock()).toBe(40);
    });
  });

  describe('filtrarDatos', () => {
    test('usa la función predicado correctamente', () => {
      const esPar = jest.fn((x: number) => x % 2 === 0);
      const resultado = filtrarDatos([1, 2, 3, 4, 5], esPar);
      
      expect(esPar).toHaveBeenCalledTimes(5);
      expect(resultado).toEqual([2, 4]);
    });
  });

  describe('Implementaciones mock', () => {
    test('mockImplementation', () => {
      const funcionMock = jest.fn((a: number, b: number) => a + b);
      funcionMock.mockImplementation((a, b) => a * b);
      
      expect(funcionMock(2, 3)).toBe(6);
      expect(funcionMock(10, 20)).toBe(200);
    });
  });
});

