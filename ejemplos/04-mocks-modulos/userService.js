const { fetchUser, sendEmail } = require('./api');

async function getUserAndNotify(userId) {
  const user = await fetchUser(userId);
  await sendEmail(user.email, 'Welcome', 'Welcome to our service!');
  return user;
}

module.exports = { getUserAndNotify };

