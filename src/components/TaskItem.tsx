import { useContext, useState } from "react";

import { type Task } from "../types/interfaces";
import { STATUS } from "../utils/constants";

import { TasksDispatchContext } from "../context/TasksContext";

function TaskItem({ id, name, status }: Task) {
  const [taskName, setTaskName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useContext(TasksDispatchContext);

  return (
    <div>
      {isEditing && <p>Press the enter key to save changes</p>}
      <input
        type="checkbox"
        checked={status === STATUS["Completed"]}
        onChange={() =>
          dispatch &&
          dispatch({
            type: "update",
            payload: {
              id,
              status:
                status === STATUS["NotStarted"]
                  ? STATUS["Completed"]
                  : STATUS["NotStarted"],
            },
          })
        }
      ></input>
      {isEditing ? (
        <input
          type="text"
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (dispatch)
                dispatch({
                  type: "update",
                  payload: { id, name: taskName },
                });
              setIsEditing(false);
            }
          }}
          value={taskName}
        ></input>
      ) : (
        <span>{taskName}</span>
      )}

      {isEditing ? (
        <button
          onClick={() => {
            setTaskName(name);
            setIsEditing(false);
          }}
        >
          CANCEL
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>EDIT</button>
      )}
      <button
        onClick={() =>
          dispatch && dispatch({ type: "delete", payload: { id } })
        }
      >
        DELETE
      </button>
    </div>
  );
}

export default TaskItem;
