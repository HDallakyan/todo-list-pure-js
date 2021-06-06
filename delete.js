import { setState, state } from './index.js';

const handleRemove = (id) => {
  const newState = state.todoList.filter(item => item.id !== id);
  setState(newState)
}

export default handleRemove;