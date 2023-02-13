const formElem = document.querySelector('.login-form');
const formInput = document.querySelector('.form-input');
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const buttonElem = document.querySelector('.submit-button');

buttonElem.setAttribute('disabled', true);

console.log(buttonElem);

// buttonElem.removeAttribute('disabled', bool);

console.log(buttonElem);

// const res = formElem.reportValidity();
// console.log(res);

const onEmailChange = () => {
  const res = formElem.reportValidity();
  console.log(res);
  if (res == true) {
    buttonElem.removeAttribute('disabled', true);
  }
};

// const onEmailChange = () => {
//   const res = formElem.reportValidity();
//   console.log(res);
//   if (res == false) {
//     buttonElem.setAttribute('disabled', bool);
//   }
//   if (res == true) {
//     buttonElem.removeAttribute('disabled', bool);
//   }
// };

formInput.addEventListener('input', onEmailChange);

const serverUrl = 'https://63e0cae2dd7041cafb393784.mockapi.io/api/v1/forms';

function createUserHandler(event) {
  event.preventDefault();

  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  const res = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(res => {
      return res.json();
    })
    .then(body => {
      alert(JSON.stringify(body));
      formElem.reset();
    });
}

formElem.addEventListener('submit', createUserHandler);
