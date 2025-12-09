// Interfaz para el usuario
export interface IUsuario {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  name?: string;
}
export async function obtenerUsuario(idUsuario: number): Promise<IUsuario> {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (idUsuario <= 0) {
    throw new Error('Invalid user ID');
  }
  
  return {
    id: idUsuario,
    first_name: `User ${idUsuario}`,
    last_name: `User ${idUsuario}`,
    email: `user${idUsuario}@example.com`,
    name: `User ${idUsuario}`
  };
}
