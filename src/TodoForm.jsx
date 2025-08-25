import React from 'react';

function TodoForm() {
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.dir(event.target);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name="title" placeholder="Add a new todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
