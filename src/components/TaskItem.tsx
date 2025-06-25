import { useContext, useState } from "react";

import { type Task } from "../types/interfaces";
import { STATUS } from "../utils/constants";

import { TasksDispatchContext } from "../context/TasksContext";

import Button from "./Button";
import { EditIcon } from "../icons/EditIcon";
import { DeleteIcon } from "../icons/DeleteIcon";

function TaskItem({ id, name, status }: Task) {
  const [taskName, setTaskName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      {isEditing && <p>Press the enter key to save changes</p>}
      <div className="task__name">
        <input
          type="checkbox"
          checked={status === STATUS["Completed"]}
          name="task-status"
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
          <span
            className={`${
              status === STATUS["Completed"] ? "task--name--checked" : ""
            }`}
          >
            {taskName}
          </span>
        )}
      </div>

      <div className="task__action__buttons">
        {isEditing ? (
          <Button
            type="icon"
            onClick={() => {
              setTaskName(name);
              setIsEditing(false);
            }}
          >
            CANCEL
          </Button>
        ) : (
          <Button type="icon" onClick={() => setIsEditing(true)}>
            <EditIcon />
          </Button>
        )}
        <Button
          type="icon"
          onClick={() =>
            dispatch && dispatch({ type: "delete", payload: { id } })
          }
        >
          <DeleteIcon />
        </Button>
      </div>
    </>
  );
}

export default TaskItem;
