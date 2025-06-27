import { useContext, useState } from "react";

import { type Task } from "../types/interfaces";
import { STATUS } from "../utils/constants";

import { TasksDispatchContext } from "../context/TasksContext";

import Button from "./Button";

import { EditIcon } from "../icons/EditIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { CancelIcon } from "../icons/CancelIcon";
import { SaveIcon } from "../icons/SaveIcon";

function TaskItem({ id, name, status }: Task) {
  const [taskName, setTaskName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useContext(TasksDispatchContext);

  const isCompleted = status === STATUS["Completed"];

  return (
    <>
      <div className="task__name">
        <div className="task__checkbox">
          <input
            type="checkbox"
            checked={isCompleted}
            name="task-status"
            onChange={() =>
              dispatch &&
              dispatch({
                type: "update",
                payload: {
                  id,
                  status: isCompleted
                    ? STATUS["NotStarted"]
                    : STATUS["Completed"],
                },
              })
            }
          ></input>
        </div>
        {isEditing ? (
          <input
            type="text"
            name="task-name-edit"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          ></input>
        ) : (
          <span className={`${isCompleted ? "task--name--checked" : ""}`}>
            {taskName}
          </span>
        )}
      </div>
      {!isCompleted ? (
        <div className="task__action__buttons">
          {isEditing ? (
            <>
              <Button
                type="icon"
                onClick={() => {
                  if (dispatch)
                    dispatch({
                      type: "update",
                      payload: { id, name: taskName },
                    });
                  setIsEditing(false);
                }}
              >
                <SaveIcon />
              </Button>
              <Button
                type="icon"
                onClick={() => {
                  setTaskName(name);
                  setIsEditing(false);
                }}
              >
                <CancelIcon />
              </Button>
            </>
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
      ) : null}
    </>
  );
}

export default TaskItem;
