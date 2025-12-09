export function procesarDatos<T, R>(datos: T[], callback: (item: T) => R): R[] {
  return datos.map(item => callback(item));
}

export function filtrarDatos<T>(datos: T[], predicado: (item: T) => boolean): T[] {
  return datos.filter(predicado);
}

