import './App.css'
import Todos from './components/Todos'
import { AddTodo } from './components/addTodo'

function App() {
  

  return (
    <>
    <div>
    <h1 className='text-5xl font-black tracking-wide'>Todo</h1>
    <AddTodo />
    <Todos />
    </div>
    </>
  )
}

export default App
