import { obtenerUsuario, enviarEmail, IUsuario } from './api';

export async function obtenerUsuarioYNotificar(idUsuario: number): Promise<IUsuario> {
  const usuario = await obtenerUsuario(idUsuario);
  await enviarEmail(usuario.email, 'Welcome', 'Welcome to our service!');
  return usuario;
}

