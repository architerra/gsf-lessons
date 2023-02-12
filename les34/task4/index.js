const formElem = document.querySelector('.login-form');

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const serverUrl = 'https://63e0cae2dd7041cafb393784.mockapi.io/api/v1/forms';

function createUserHandler(event) {
  event.preventDefault();

  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  // const user = {
  //   email: 'test@gmail.com',
  //   name: 'Olexiy',
  //   password: `${passwordInputElem}`,
  // };

  const res = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then(body => {
    alert(JSON.stringify(formData));
  });
  formElem.reset();
}

formElem.addEventListener('submit', createUserHandler);
