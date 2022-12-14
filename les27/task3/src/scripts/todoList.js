import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';

export const initTodoListHandlers = () => {
  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
};
