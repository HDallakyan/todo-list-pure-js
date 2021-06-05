import { setState, state } from './index.js';

export default function handleRemove(id) {
  const newState = state.todoList.filter(item => item.id !== id);
  setState(newState)
}