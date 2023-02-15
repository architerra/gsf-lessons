const fetchUserData = async userName => {
  const responce = await fetch(`https://api.github.com/users/${userName}`);
  //   console.log(responce);
  const blogUrl = await responce.json();
  //   console.log(blogUrl);
  const res = new Promise(resolve => {
    resolve(blogUrl.blog);
  });
  //   console.log(res);
  return res;
};

export const getUsersBlogs = users => {
  const result = [];
  users.forEach(e => {
    const userData = fetchUserData(e);
    result.push(userData);
  });
  //   console.log(result);
  return Promise.all(result);
};

// examples
//getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']); //.then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
