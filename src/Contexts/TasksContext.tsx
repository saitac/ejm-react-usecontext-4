import { ReactNode, createContext, useReducer, Dispatch, Context, useContext } from "react"
import { tasksReducer, tasksReducerAction, tasksReducerInit } from "../reducers/TasksReducer"
import { ClsTask } from "../Class/Class"


type TasksProviderProps = {
    children: ReactNode
}

const TasksContext: Context<ClsTask[] | null> = createContext<null | ClsTask[]>(null);
const TasksDispatchContext = createContext<Dispatch<tasksReducerAction>>(null!);

const TasksProvider = ( {children}: TasksProviderProps) => {

    const [tasks, dispatch] = useReducer(tasksReducer, tasksReducerInit());

    return(
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch} >
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )

}

const useTasks = (): ClsTask[] | null => { return useContext(TasksContext); }

const useTasksDispatch = () => { return useContext(TasksDispatchContext); }

export {
    TasksProvider,
    useTasks,
    useTasksDispatch
}