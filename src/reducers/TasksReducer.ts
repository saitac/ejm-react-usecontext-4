
import {v4 as uuid4} from "uuid"
import { initialTasks } from "../DB/db"
import { ClsTask } from "../Class/Class"

type tasksReducerAction =
    {type: "added", argumento: ClsTask} |
    {type: "changed", argumento: ClsTask} |
    {type: "deleted", argumento: ClsTask}

const tasksReducerInit = (): ClsTask[] | null => {
    return initialTasks
}

const tasksReducer = (
    tasks: ClsTask[] | null = tasksReducerInit(),
    action: tasksReducerAction
) => {

    switch(action.type) {
        case "added": {
            let tasksUpdated: ClsTask[] | null = [];
            action.argumento.id = uuid4();
            if (tasks !== null) {
                tasksUpdated = [...tasks, action.argumento]
            }else{
                tasksUpdated.push(action.argumento);
            }
            return tasksUpdated;
        }
        case "changed":{
            let tasksUpdated: ClsTask[] | null;
            if (tasks !== null){
                tasksUpdated = tasks.map( t => {
                    if ( t.id === action.argumento.id ) {
                        return action.argumento;
                    } else {
                        return t;
                    }
                })
            } else {
                tasksUpdated = tasks;
            }
            return tasksUpdated;
        }
        case "deleted":{
            let tasksUpdated: ClsTask[] | null;
            if (tasks !== null){
                tasksUpdated = tasks.filter( (t: ClsTask) => t.id !== action.argumento.id )
            } else {
                tasksUpdated = tasks;
            }
            return tasksUpdated;
        }
    }
}

export {
    tasksReducer,
    type tasksReducerAction,
    tasksReducerInit
}