import { useTasks } from "../Contexts/TasksContext"
import Task from "./Task";

const TaskList = () => {
    const tasks: ClsTask[] | null = useTasks();
    
    return(
        <ul>
            {tasks !== null ? 
                tasks.map(
                    task => (
                        <li key={task.id}>
                            <Task task={task}></Task>
                        </li>
                    )
                ) 
                : <p>No hay elementos</p>}
        </ul>
    )
}

export default TaskList