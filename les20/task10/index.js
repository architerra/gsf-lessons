export function finishForm() {
  const formElem = document.querySelector('.login-form');
  const loginElem = document.createElement('input');
  loginElem.setAttribute('type', 'text');
  loginElem.setAttribute('name', 'login');
  formElem.prepend(loginElem);

  const passElem = document.querySelector('[name="password"]');
  passElem.removeAttribute('type');
  passElem.setAttribute('type', 'password');
}
