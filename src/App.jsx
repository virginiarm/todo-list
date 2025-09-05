import React, { useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: input.trim(),
      isCompleted: false
    };
    setTodoList([...todoList, newTodo]);
    setInput('');
  };
  const completeTodo = (id) => {
    const updatedTodos = todoList.map((todo)=> {
      if (todo.id === id){
        return { ... todo, isCompleted: true};
      }
      return todo;
    });
    setTodoList (updatedTodos);
  }

  return (
    <div>
     <input
        type="text"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTodo}
      />
      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;
