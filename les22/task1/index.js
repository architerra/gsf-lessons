const elem = document.querySelector('.rect_div');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML = `<span style="color: ${color}">${text}</span>`;
};



elem.addEventListener('click', () => logTarget(''))