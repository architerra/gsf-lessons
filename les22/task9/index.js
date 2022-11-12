const statusTask = document.querySelector('.task-status');

function checkTask(event) {
  console.log(event.target.checked);
}

statusTask.addEventListener('click', checkTask);
