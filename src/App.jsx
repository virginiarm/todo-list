import React, { useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App(){
  const [newTodo, setNewTodo] =useState ("Learn React");
  const todos =[
    {id:1,title: "water plants"},
    {id:2,title: "wash water bottle"},
    {id:3,title: "complete coding assingment"},
  ];
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <p>{newTodo}</p>
      <TodoList todos= {todos}/>
    </div>
  );
}
