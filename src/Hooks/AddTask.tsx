import { useState, ChangeEvent } from "react";
import { useTasksDispatch } from "../Contexts/TasksContext";
import { ClsTask } from "../Class/Class"

const AddTask = () => {
    const [text, setText] = useState("");
    const tasksDispatch = useTasksDispatch();
    
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={ (e: ChangeEvent<HTMLInputElement>) => {
                    setText(e.target.value)
                } }
            />
            <button
                onClick={ () => {
                    tasksDispatch({type:"added", argumento: {...new ClsTask(), text: text}});
                    setText("");
                }}
            >Add</button>
        </>
    )
}

export default AddTask;