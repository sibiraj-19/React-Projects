import React, { useState } from 'react';
import './todo.css';
function TodoList(){
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');    
  const InputChange = (e) => {
    setInputValue(e.target.value);
  }
  const AddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  }
  const DeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }
  return (
    <div id='todo'>
      <center>   <h2>Todo List</h2>
  <input
        type="text"
        value={inputValue}
        onChange={InputChange}
        placeholder="Add todo..."
      />
      <button onClick={AddTodo}> + </button></center> 
      <p>
        {todos.map((todo, index) => (
          <p key={index}>
            <hr />
            <input  type="checkbox"/><input type="text" id='c' value= {todo} readOnly  />
            <button id='b' onClick={() => DeleteTodo(index)}>del</button>
            <hr />
          </p>
        ))
        }
      </p>
    </div>
  )
}
export default TodoList;
