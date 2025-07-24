import './App.css'

function App(){
  const todos =[
    {id:1,title: "water plants"},
    {id:2,title: "wash water bottle"},
    {id:3,title: "complete coding assingment"},
  ]
  return(
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default App
