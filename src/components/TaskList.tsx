import { useContext } from "react";

import { TasksContext } from "../context/TasksContext";

import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks?.map(({ id, name, status }) => (
        <li key={id}>
          <TaskItem id={id} name={name} status={status} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
