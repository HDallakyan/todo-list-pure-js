import render from './render.js';

const todoItems = [
  {title: 'go to job', id: 0},
  {title: 'do homework', id: 1},
]

let currentValue = '';

const ulEl = document.querySelector('.todo-list');
const submitBtn = document.querySelector('#add-todo');
const todoInput = document.querySelector('#todo-input');

render(todoItems, ulEl);

submitBtn.addEventListener('click', () => {
  todoItems.push({title: currentValue, id: todoItems.length});
  render(todoItems, ulEl);
});

todoInput.addEventListener('change', (event) => {
  currentValue = event.target.value
})