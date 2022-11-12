const statusTask = document.querySelector('.task-status');

function checkTask(event) {
  console.log(event.target.checked);
}

statusTask.addEventListener('click', checkTask);

const textInput = document.querySelector('.text-input');

function getText(event) {
  console.log(event.target.value);
}

textInput.addEventListener('change', getText);
