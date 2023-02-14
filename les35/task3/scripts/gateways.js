export const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(responce => {
    if (responce.ok) {
      responce.json();
    }
    throw new Error('Failed to load data');
  });
};

export const fetchRepositories = url =>
  fetch(url).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    throw new Error('Failed to load data');
  });
