import { useContext } from "react";

import { TasksContext } from "../context/TasksContext";

import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <div className="tasks">
      {tasks && tasks.length !== undefined && tasks.length > 0 ? (
        <ul>
          {tasks?.map(({ id, name, status }) => (
            <li key={id} className="task__item">
              <TaskItem id={id} name={name} status={status} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TaskList;
