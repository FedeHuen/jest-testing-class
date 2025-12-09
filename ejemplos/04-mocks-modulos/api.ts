export interface IUsuario {
  id: number;
  name: string;
  email: string;
}

export interface IRespuestaEmail {
  success: boolean;
}

export async function obtenerUsuario(idUsuario: number): Promise<IUsuario> {
  const response = await fetch(`/api/users/${idUsuario}`);
  return response.json();
}

export async function enviarEmail(
  para: string, 
  asunto: string, 
  cuerpo: string
): Promise<IRespuestaEmail> {
  const response = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify({ to: para, subject: asunto, body: cuerpo })
  });
  return response.json();
}

