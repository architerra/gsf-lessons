localStorage.clear();
// localStorage.setItem('Hobbies', JSON.stringify({ name: 'Tom' }));

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: JSON.parse(value),
    };
  }, {});
};

// console.log(getLocalStorageData());
