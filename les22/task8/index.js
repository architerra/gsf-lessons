const textInput = document.querySelector('.text-input');

function getText(event) {
  console.log(event.target.value);
}

textInput.addEventListener('change', getText);
