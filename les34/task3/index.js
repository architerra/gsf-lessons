const formElem = document.querySelector('.login-form');

const serverUrl = 'https://63e0cae2dd7041cafb393784.mockapi.io/api/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Andrey',
    password: '123',
  };
}

formElem.addEventListener('submit', createUserHandler);
