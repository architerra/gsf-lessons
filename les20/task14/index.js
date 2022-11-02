export function getSection(num) {
  let spanElem = document.querySelector(`span[data-number="${num}"]`);
  let boxElem = spanElem.closest('.box');
  return boxElem.getAttribute('data-section');
}
