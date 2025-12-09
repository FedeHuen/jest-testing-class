import { obtenerUsuario, IUsuario } from './api';

describe('Funciones asíncronas', () => {
  describe('obtenerUsuario - async/await', () => {
    // jest.setTimeout(10000);
    test('obtiene datos del usuario exitosamente', async () => {
      const usuario: IUsuario = await obtenerUsuario(1);
      expect(usuario).toHaveProperty('id');
      expect(usuario).toHaveProperty('first_name');
      expect(usuario).toHaveProperty('last_name');
      expect(usuario).toHaveProperty('email');
      expect(usuario.id).toBe(1);
      expect(usuario.name).toBe('User 1');
    });

    test('maneja errores correctamente', async () => {
      await expect(obtenerUsuario(0)).rejects.toThrow('Invalid user ID');
      await expect(obtenerUsuario(-1)).rejects.toThrow('Invalid user ID');
    });

    test('retorna la estructura correcta del usuario', async () => {
      const usuario: IUsuario = await obtenerUsuario(5);
      
      expect(usuario).toEqual({
        id: 5,
        name: 'User 5',
        email: 'user5@example.com',
        first_name: 'User 5',
        last_name: 'User 5'
      });
    });
  });
});
