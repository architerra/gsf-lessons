export function createButton(buttonText) {
  const element = document.createElement('button');
  element.textContent = buttonText;
  body.append(element);
}
