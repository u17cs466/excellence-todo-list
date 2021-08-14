import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/Store';

export const Todo = (props) => {
  const { item } = props;
  const [updateMode, setUpdateMode] = useState(false);
  const [newTodoValue, setNewTodoValue] = useState(item.todo);
  const dispatch = useDispatch();

  const DeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const UpdateTodo = () => {
    dispatch(updateTodo(item.id, newTodoValue));
    setUpdateMode(false);
  };

  if (updateMode) {
    return (
      <div className='mx-3 my-3 items-center text flex bg-gray-200 justify-center rounded-md'>
        <input
          className='pl-5 '
          type='text'
          defaultValue={item.todo}
          onChange={(e) => setNewTodoValue(e.target.value)}
        />

        <button
          className='h-10 w-20 bg-gray-400 hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => {
            setNewTodoValue(item.todo);
            setUpdateMode(false);
          }}
        >
          Cancel
        </button>
        <button
          className='h-10 w-20 bg-gray-400 hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => UpdateTodo()}
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <div className='mx-3 my-3 items-center text flex rounded-md bg-gray-200'>
      <p className='h-10 w-64 rounded-sm mx-auto truncate ' id={item.id}>
        {item.todo}
      </p>

      <button
        className='h-10 w-20 bg-gray-400 hover:bg-blue-500 hover:text-white rounded-md'
        onClick={() => DeleteTodo(item.id)}
      >
        Delete
      </button>
      <button
        className='h-10 w-20 bg-gray-400 hover:bg-blue-500 hover:text-white rounded-md'
        onClick={() => setUpdateMode(true)}
      >
        Edit
      </button>
    </div>
  );
};
