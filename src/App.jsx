
import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const todos = [
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Walk the dog' },
    { id: 3, title: 'Do laundry' }
  ];
  <TodoList todoList={todos} />
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

