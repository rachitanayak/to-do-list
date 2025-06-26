import type { MouseEventHandler, ReactNode } from "react";
import { type button } from "./custom-types";
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

export interface TasksProviderProps {
  children: ReactNode;
}

export interface ButtonProps {
  type: button;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IconProps {
  width?: number;
  height?: number;
}
