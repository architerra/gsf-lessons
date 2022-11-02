export function createButton(buttonText) {
  let bodyElem = document.querySelector('body');
  const element = document.createElement('button');
  element.textContent = buttonText;
  bodyElem.append(element);
}
