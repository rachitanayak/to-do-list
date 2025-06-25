import { useContext, useState } from "react";

import { TasksDispatchContext } from "../context/TasksContext";

import Button from "./Button";

function AddTask() {
  const [taskName, setTaskName] = useState("");

  const dispatch = useContext(TasksDispatchContext);

  const handleAdd = () => {
    if (dispatch) dispatch({ type: "add", payload: { name: taskName } });
    setTaskName("");
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder="Enter your task here..."
        name="task-name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      ></input>
      <Button type="primary" disabled={taskName === ""} onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}

export default AddTask;
