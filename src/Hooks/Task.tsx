import { ReactNode, useState, ChangeEvent } from "react"
import { useTasksDispatch } from "../Contexts/TasksContext";
import { ClsTask } from "../Class/Class";

type TaskProps = {
    task: ClsTask
}

const Task = ({task}: TaskProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const tasksDispatch = useTasksDispatch();
    let taskContent: ReactNode;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={ (e: ChangeEvent<HTMLInputElement>) => { tasksDispatch({type:"changed", argumento: {...task, text: e.target.value}}) }}
                />
                <button
                    onClick={ () => {setIsEditing(false)}}
                >Save</button>
            </>
        );

    } else {
        taskContent = (
            <>
                {task.text}
                <button
                    onClick={ () => {setIsEditing(true)}}
                >Edit</button>
            </>
        )
    }

    return(
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={ (e: ChangeEvent<HTMLInputElement>) => {tasksDispatch({type: "changed", argumento: {...task, done: e.target.checked}})}}
            />
            {taskContent}
            <button
                onClick={ () => {tasksDispatch({type:"deleted", argumento: task})} }
            >Delete</button>
        </label>
    )
}

export default Task