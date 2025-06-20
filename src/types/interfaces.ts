import { STATUS } from "../utils/constants";

export interface Task {
  id: string;
  name: string;
  status: STATUS;
}

export interface Action {
  type: string;
  payload: Partial<Task>;
}
