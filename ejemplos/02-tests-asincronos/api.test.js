const { fetchUser, readFileAsync, fetchData } = require('./api');

describe('Async functions', () => {
  describe('fetchUser - async/await', () => {
    test('fetches user data successfully', async () => {
      const user = await fetchUser(1);
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('first_nam');
      expect(user).toHaveProperty('last_name');
      expect(user).toHaveProperty('email');
      expect(user.id).toBe(1);
      expect(user.name).toBe('User 1');
    });

    test('handles errors correctly', async () => {
      await expect(fetchUser(0)).rejects.toThrow('Invalid user ID');
      await expect(fetchUser(-1)).rejects.toThrow('Invalid user ID');
    });

    test('returns correct user structure', async () => {
      const user = await fetchUser(5);
      
      expect(user).toEqual({
        id: 5,
        name: 'User 5',
        email: 'user5@example.com'
      });
    });
  });

  describe('readFileAsync - callbacks', () => {
    test('reads file content successfully', (done) => {
      readFileAsync('data.txt', (err, data) => {
        expect(err).toBeNull();
        expect(data).toBe('Content of data.txt');
        done();
      });
    });

    test('handles file errors', (done) => {
      readFileAsync('error.txt', (err, data) => {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('File not found');
        expect(data).toBeNull();
        done();
      });
    });
  });

  describe('fetchData - Promises', () => {
    test('resolves with correct data', () => {
      return fetchData('https://api.example.com/data').then(result => {
        expect(result).toEqual({
          data: 'Success',
          url: 'https://api.example.com/data'
        });
      });
    });

    test('rejects on error', () => {
      return fetchData('https://api.example.com/error').catch(error => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Network error');
      });
    });

    test('works with async/await', async () => {
      const result = await fetchData('https://api.example.com/data');
      expect(result.data).toBe('Success');
    });
  });
});

