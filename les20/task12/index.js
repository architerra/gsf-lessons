export function squaredNumbers() {
  const elements = document.querySelectorAll('.number');
  const elemsList = Array.from(elements);

  elemsList.map(elem => {
    let squaredValue = elem.getAttribute('data-number') ** 2;
    elem.setAttribute('data-squared-number', squaredValue);
  });
}
