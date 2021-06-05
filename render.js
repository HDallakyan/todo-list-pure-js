import handleRemove from './delete.js';

export default function render(todoList, ulElement) {
  ulElement.innerHTML = '';

  todoList.forEach(item => {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement).innerHTML = (
      `<div>
        <button>Delete</button>
        ${item.title}
      </div>`
    )
    liElement.onclick = function() {
      handleRemove(item.id);
    }
  });
}
