export function getItemsList() {
  let elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

export function getItemsArray() {
  let nodeList = document.querySelectorAll('.tool');
  let elementsArray = Array.from(nodeList);
  console.dir(elementsArray);
  return elementsArray;
}
