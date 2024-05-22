import './App.css'
import { TasksProvider } from './Contexts/TasksContext'
import AddTask from './Hooks/AddTask'
import TaskList from './Hooks/TaskList'

function App() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask/>
      <TaskList/>
    </TasksProvider>
  )
}

export default App
