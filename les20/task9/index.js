export function finishList() {
  //   let bodyElem = document.querySelector('body');
  //   const element = document.createElement('button');
  //   element.textContent = buttonText;
  //   bodyElem.append(element);

  let ulElem = document.querySelector('.list');

  const liElemOne = document.createElement('li');
  liElemOne.textContent = '1';
  ulElem.prepend(liElemOne);

  const liElemEight = document.createElement('li');
  liElemEight.textContent = '8';
  ulElem.append(liElemEight);

  let specElem = document.querySelector('.special');

  const liElemFour = document.createElement('li');
  liElemFour.textContent = '4';
  specElem.before(liElemFour);

  const liElemSix = document.createElement('li');
  liElemSix.textContent = '6';
  specElem.after(liElemSix);
}
