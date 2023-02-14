export const fetchUser = async userId => {
  try {
    const responce = await fetch(`https://api.github.com/users/${userName}`);
    if (!responce.ok) {
      return null;
    }
    const userData = await responce.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};
