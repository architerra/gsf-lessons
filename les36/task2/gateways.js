export const fetchUserData = async userName => {
  const responce = await fetch(`https://api.github.com/users/${userName}`);
  if (responce.ok) {
    return await responce.json();
  }
  throw new Error('Failed to load data');
};

export const fetchRepositories = async url => {
  const responce = await fetch(url);
  if (responce.ok) {
    return await responce.json();
  }
  throw new Error('Failed to load data');
};
