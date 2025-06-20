import {
  createContext,
  useReducer,
  type ReactNode,
  type Dispatch,
} from "react";

import { STATUS } from "../utils/constants";
import { type Task, type Action } from "../types/interfaces";
import { v4 as uuidv4 } from "uuid";

// Contexts
const TasksContext = createContext<Task[] | null>(null);
const TasksDispatchContext = createContext<Dispatch<Action> | null>(null);

// Reducer
const tasksReducer = (tasks: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "add": {
      const newTask: Task = {
        id: uuidv4(),
        status: STATUS["NotStarted"],
        name: action.payload.name ?? "",
      };
      return [...tasks, newTask];
    }
    case "update": {
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            id: task.id,
            name: action.payload.name || task.name,
            status: action.payload.status || task.status,
          };
        } else return task;
      });
    }
    case "delete":
      return tasks.filter((task) => task.id !== action.payload.id);

    default:
      throw new Error("Inavlid action type: " + action.type);
  }
};

// Provider
interface TasksProviderProps {
  children: ReactNode;
}

function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export { TasksProvider, TasksContext, TasksDispatchContext };
