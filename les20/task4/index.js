export function getTitle() {
  const element = document.querySelector('.title');
  return element.textContent;
}

export function getDescription() {
  const element = document.querySelector('.about');
  return element.innerText;
}

export function getPlans() {
  const element = document.querySelector('.plans');
  return element.innerHTML;
}

export function getGoal() {
  const element = document.querySelector('.goal');
  return element.outerHTML;
}
