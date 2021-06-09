import handleRemove from './delete.js';
// import handleCheck from './check.js';

export default function render(todoList, ulElement) {
  ulElement.innerHTML = '';

  if(todoList.length) {
    todoList.forEach(item => {
      const liElement = document.createElement('li');
      const deleteBtnElement = document.createElement('button');
      const deleteBtnText = document.createTextNode('Delete');

      const checkBtnElement = document.createElement('button');
      const checkBtnText = document.createTextNode('Undone');

      deleteBtnElement.appendChild(deleteBtnText);
      checkBtnElement.appendChild(checkBtnText);

      ulElement.appendChild(liElement).innerHTML = (
        `<div style="display: flex">
          ${item.title}
        </div>`
      )
      liElement.appendChild(deleteBtnElement);
      liElement.appendChild(checkBtnElement);

      deleteBtnElement.onclick = function() {
        handleRemove(item.id);
      };

      checkBtnElement.onclick = function() {
        handleRemove(item.id);
      }
    });
  }
}
