export default function render(todoItems, ulEl) {
  ulEl.innerHTML = '';
  todoItems.forEach(item => {
    ulEl.appendChild(document.createElement('li')).innerHTML = item.title
  });
}
