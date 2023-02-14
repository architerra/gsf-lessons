const parceUser = jsonUser => {
  try {
    return JSON.parse(jsonUser);
  } catch (e) {
    return null;
  }
};

// const res = parceUser('{"name": "John"}');

// console.log(res);
