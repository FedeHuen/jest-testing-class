// Simulación de una función que hace fetch
async function fetchUser(userId) {
  // Simulamos un delay de red
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (userId <= 0) {
    throw new Error('Invalid user ID');
  }
  
  return {
    id: userId,
    first_name: `User ${userId}`,
    last_name: `User ${userId}`,
    email: `user${userId}@example.com`
  };
}

// Función con callback
function readFileAsync(path, callback) {
  setTimeout(() => {
    if (path === 'error.txt') {
      callback(new Error('File not found'), null);
    } else {
      callback(null, `Content of ${path}`);
    }
  }, 50);
}

// Función que retorna una Promise
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes('error')) {
        reject(new Error('Network error'));
      } else {
        resolve({ data: 'Success', url });
      }
    }, 100);
  });
}

module.exports = { fetchUser, readFileAsync, fetchData };

