import React, { useState } from 'react';
import { addTodo } from './redux/Store';
import { connect } from 'react-redux'
import { Todo } from './components/Todo';

function App(props) {

  const [inputText, setInputText] = useState(null);

  const AddTodo = () => {
    props.dispatch(addTodo(inputText));
  
  };

 
  return (

    <div className=" bg-gray-100 h-1/2 w-1/2 mx-auto mt-24 text-center space-y-5 rounded-lg shadow-lg p-3">

      <div className=" bg-gray-200 rounded-md" >
        <input className=" w-44 h-10 border-2 mr-2 rounded-md"
          required={false}
          type={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className='h-10 w-20 bg-gray-400 hover:bg-blue-500 hover:text-white rounded-md'type="submit" onClick={AddTodo}>
          Add Todo
        </button>
      </div>
      <div className="">
        {props.todoList.map((item) => <Todo item={item} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todoList: state };
};

export default connect(mapStateToProps)(App);
