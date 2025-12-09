export class Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }
}

export function procesarCalculo(
  a: number,
  b: number,
  operacion: (calc: Calculadora, a: number, b: number) => number
): number {
  const calc = new Calculadora();
  return operacion(calc, a, b);
}
