import { obtenerUsuarioYNotificar } from './servicioUsuario';
import * as api from './api';

jest.mock('./api', () => ({
  obtenerUsuario: jest.fn(),
  enviarEmail: jest.fn()
}));

const obtenerUsuarioMock = api.obtenerUsuario as jest.MockedFunction<typeof api.obtenerUsuario>;
const enviarEmailMock = api.enviarEmail as jest.MockedFunction<typeof api.enviarEmail>;

describe('Mocks de módulos', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('mockea el módulo completo', async () => {
    obtenerUsuarioMock.mockResolvedValue({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    });
    
    enviarEmailMock.mockResolvedValue({ success: true });
    // enviarEmailMock.mockImplementation(() =>{ 
    //   console.log('enviarEmailMock1');
    //   return Promise.resolve({ success: true }) 
    // });
    const usuario = await obtenerUsuarioYNotificar(1);

    expect(obtenerUsuarioMock).toHaveBeenCalledWith(1);
    expect(enviarEmailMock).toHaveBeenCalledWith(
      'john@example.com',
      'Welcome',
      'Welcome to our service!'
    );
    expect(usuario).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    });
  });

  test('mockea el módulo con diferentes valores de retorno', async () => {
    obtenerUsuarioMock.mockResolvedValueOnce({
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com'
    });

    const usuario = await obtenerUsuarioYNotificar(2);

    expect(usuario.email).toBe('jane@example.com');
  });
});

