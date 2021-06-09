import { setState, state } from './index.js';

const handleCheck = (id) => {
  const newState = state.todoList.map(item => {
    if(item.id === id) {
      return {
        ...item,
        isDone: true,
      }
    } 

    return item
  });
  setState(newState)
}

export default handleCheck;