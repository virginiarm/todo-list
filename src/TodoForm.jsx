import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();

    // Prevent submitting empty todos
    if (workingTodoTitle.trim() === '') return;

    onAddTodo(workingTodoTitle.trim());
    setWorkingTodoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Enter a todo"
        value={workingTodoTitle}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}
      />
      <button type="submit" disabled={workingTodoTitle.trim() === ''}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
