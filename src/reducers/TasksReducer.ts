import { initialTasks } from "../DB/db"

type tasksReducerAction =
    {type: "added"} |
    {type: "changed", argumento: ClsTask} |
    {type: "deleted"}

const tasksReducerInit = (): ClsTask[] | null => {
    return initialTasks
}

const tasksReducer = (
    tasks: ClsTask[] | null = tasksReducerInit(),
    action: tasksReducerAction
) => {

    switch(action.type) {
        case "added": {
            console.log("added");
            return tasks;
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
            console.log("deleted");
            return tasks;
        }
    }
}

export {
    tasksReducer,
    type tasksReducerAction,
    tasksReducerInit
}