import React from 'react';

function TodoForm() {
  return (
    <form>
        <label htmlFor="Todotile">Todo</label>
        <input type= "text" id="todoTitle"/>
        <button type= "submit">Add Todo</button>
    </form>
  )
}
export default TodoForm;