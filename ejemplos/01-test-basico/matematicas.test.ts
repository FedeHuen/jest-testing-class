import { sumar, restar} from './matematicas';

describe('Funciones matemáticas', () => {
  describe('sumar', () => {
    test('suma dos números positivos correctamente', () => {
      expect(typeof sumar(2, 3)).toBe('number');
      expect(sumar(2, 3)).toBe(5);
    });
  });

  describe('restar', () => {
    test('resta dos números correctamente', () => {
      expect(restar(5, 3)).toBe(2);
      expect(restar(10, 7)).toBe(3);
    });
  });
});

