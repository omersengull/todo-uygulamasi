import { useState } from 'react'
import './App.css'
import Todocreate from './components/todocreate'
import Todos from './components/todos'
import Todolist from './components/todolist'

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {

    setTodos([...todos, newTodo]);
  }


  return (
    <div className="app">
      <Todocreate onCreateTodo={createTodo} />
      <Todolist todos={todos} />
    </div>

  )
}

export default App
