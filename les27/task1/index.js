// localStorage.clear();
// localStorage.setItem('Hobbies', JSON.stringify({ name: 'Tom' }));

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

// console.log(getLocalStorageData());
