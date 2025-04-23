import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList = [] }) {
    const todos=[
        { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Walk the dog' },
    { id: 3, title: 'Do laundry' }
  ];
    return (
      <ul>
        {todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo}/>
        ))}
      </ul>
    );
}
  
  export default TodoList;
  
  




