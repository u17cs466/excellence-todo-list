import { createStore } from 'redux';

export const addTodo = (inputValue) => ({ type: 'ADD_TODO', data: inputValue });
export const deleteTodo = (id) => ({ type: 'DELETE_TODO', data: id });
export const updateTodo = (id, todo) => ({
  type: 'UPDATE_TODO',
  data: { id, todo },
});

const initialList = localStorage.getItem('todoList');
const INITIAL_STATE = initialList ? JSON.parse(initialList) : [];

const saveToLocalStorage = (state) => {
  localStorage.setItem('todoList', JSON.stringify(state));
};

const ToDoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newToDo = {
        id: state.length,
        todo: action.data,
      };
      const newList = [...state, newToDo];
      saveToLocalStorage(newList);
      return newList;

    case 'DELETE_TODO':
      const newTodoList = state.filter((item) => {
        if (item.id === action.data) {
          return false;
        }
        return true;
      });
      saveToLocalStorage(newTodoList);
      return newTodoList;

    case 'UPDATE_TODO':
      const updatedList = state.map((todo) => {
        if (todo.id === action.data.id) {
          return { ...todo, todo: action.data.todo };
        }
        return todo;
      });
      saveToLocalStorage(updatedList);
      return updatedList;
    default:
      return state;
  }
};

export const store = createStore(ToDoListReducer);
