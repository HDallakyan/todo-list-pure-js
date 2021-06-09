import render from './render.js';


// we have a main state
export const state = {
  todoList: [
    {title: 'go to job', id: 0, checked: true},
    {title: 'do homework', id: 1},
  ]
}

// current input value
let currentValue = '';

// html elements
const ulElement = document.querySelector('.todo-list');
const submitBtn = document.querySelector('#add-todo');
const todoInput = document.querySelector('#todo-input');

// setState methods thats get and new object and change existing state with that object
export const setState = (todoList) => {
  // changes our existing state
  state.todoList = todoList;
  // and draw again
  render(todoList, ulElement);
};

// initial draw our view
render(state.todoList, ulElement);

// add new todo
submitBtn.addEventListener('click', () => {
  setState([
      // {title: 'ds', id: 4}, {title: '44', id: 55}
      ...state.todoList,
      {
        title: currentValue, 
        id: state.todoList.length,
      }
    ]);
  render(state.todoList, ulElement);
});

// listen input change
todoInput.addEventListener('change', (event) => {
  currentValue = event.target.value
});





const obj = {
  todoList: [],
}
function fuck(arr) {
  obj.todoList = arr;
}

fuck([1])