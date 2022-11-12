const btnArr = [...document.querySelectorAll('.pagination__page')];
const btnOne = btnArr[0];
const btnTwo = btnArr[1];
const btnThree = btnArr[2];

function handleClick(event) {
  console.log(event.target.textContent);
}

btnOne.addEventListener('click', handleClick);
btnTwo.addEventListener('click', handleClick);
btnThree.addEventListener('click', handleClick);
