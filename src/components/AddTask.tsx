import { useContext, useState } from "react";
import { TasksDispatchContext } from "../context/TasksContext";

function AddTask() {
  const [taskName, setTaskName] = useState("");

  const dispatch = useContext(TasksDispatchContext);

  const handleAdd = () => {
    if (dispatch) dispatch({ type: "add", payload: { name: taskName } });
    setTaskName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task here..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      ></input>
      <button disabled={taskName === ""} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
