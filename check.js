import { setState, state } from './index.js';

const handleCheck = (id) => {
  const newState = state.todoList.filter(item => item.id !== id);
  setState(newState)
}

export default handleRemove;