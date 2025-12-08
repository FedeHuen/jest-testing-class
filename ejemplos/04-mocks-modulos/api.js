async function fetchUser(userId) {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
}

async function sendEmail(to, subject, body) {
  const response = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify({ to, subject, body })
  });
  return response.json();
}

module.exports = { fetchUser, sendEmail };

