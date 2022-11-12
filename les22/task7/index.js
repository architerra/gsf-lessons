const btnArr = [...document.querySelectorAll('.btn')];
const btnOne = btnArr[0];
const btnTwo = btnArr[1];

function handleClick(event) {
  console.log(event.target.textContent);
}

btnOne.addEventListener('click', handleClick);
btnTwo.addEventListener('click', handleClick);
