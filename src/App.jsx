import React, { useState } from 'react';  
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [newTodo, setNewTodo] = useState("");


  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <h1>My Todo List</h1>

      {}
      <TodoForm />

      {}
      <input
        type="text"
        value={newTodo}  
        onChange={handleInputChange}  
        placeholder="Add a new todo"
      />

      {}
      <p>{newTodo}</p>

      {}
      <TodoList />
    </div>
  );
}

export default App;



