import React, { useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
    </div>
  );
}

export default App;
