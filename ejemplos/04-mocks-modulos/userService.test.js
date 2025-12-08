const { getUserAndNotify } = require('./userService');
const { fetchUser, sendEmail } = require('./api');

// Mock completo del módulo api
jest.mock('./api');

describe('Module mocks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('mocks entire module', async () => {
    // Configurar el mock
    fetchUser.mockResolvedValue({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    });
    
    sendEmail.mockResolvedValue({ success: true });

    const user = await getUserAndNotify(1);

    expect(fetchUser).toHaveBeenCalledWith(1);
    expect(sendEmail).toHaveBeenCalledWith(
      'john@example.com',
      'Welcome',
      'Welcome to our service!'
    );
    expect(user).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    });
  });

  test('mocks module with different return values', async () => {
    fetchUser.mockResolvedValueOnce({
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com'
    });

    const user = await getUserAndNotify(2);

    expect(user.email).tobe('jane@example.com');
  });
});

