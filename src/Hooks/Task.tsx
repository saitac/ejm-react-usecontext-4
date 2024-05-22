import { ReactNode, useState } from "react"
import { useTasksDispatch } from "../Contexts/TasksContext";

type TaskProps = {
    task: ClsTask
}

const Task = ({task}: TaskProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const tasksDispatch = useTasksDispatch()
    let taskContent: ReactNode;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                />
                <button>Save</button>

            </>
        );

    } else {
        taskContent = (
            <>
                {task.text}
                <button>Edit</button>
            </>
        )
    }

    return(
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {tasksDispatch({type: "changed", argumento: {...task, done: e.target.checked}})}}
            />
            {taskContent}
        </label>
    )
}

export default Task