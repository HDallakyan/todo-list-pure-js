import render from './render.js';


// we have a main state
export const state = {
  todoList: [
    {title: 'go to job', id: 0},
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
export const setState = (newState) => {
  // changes our existing state
  state.todoList = newState;
  // and draw again
  render(state.todoList, ulElement);
};

// initial draw our view
render(state.todoList, ulElement);

// add new todo
submitBtn.addEventListener('click', () => {
  setState({
    ...state, 
    todoList: [
      ...state.todoList,
      {
        title: currentValue, 
        id: state.todoList.length,
      }
    ]
  });
  render(state.todoList, ulEl);
});

// listen input change
todoInput.addEventListener('change', (event) => {
  currentValue = event.target.value
});
