export const parseUser = jsonUser => {
  try {
    return JSON.parse(jsonUser);
  } catch (e) {
    return null;
  }
};

// const res = parseUser('{"name": "John"}');

// console.log(res);
