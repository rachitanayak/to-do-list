import type { IconProps } from "../types/interfaces";
import variables from "../css/_variables.module.scss";

export const DeleteIcon = ({ width = 20, height = 20 }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83333 17.5C5.37499 17.5 4.98263 17.3368 4.65624 17.0104C4.32986 16.684 4.16666 16.2917 4.16666 15.8333V5H3.33333V3.33333H7.49999V2.5H12.5V3.33333H16.6667V5H15.8333V15.8333C15.8333 16.2917 15.6701 16.684 15.3437 17.0104C15.0174 17.3368 14.625 17.5 14.1667 17.5H5.83333ZM14.1667 5H5.83333V15.8333H14.1667V5ZM7.49999 14.1667H9.16666V6.66667H7.49999V14.1667ZM10.8333 14.1667H12.5V6.66667H10.8333V14.1667Z"
      fill={variables.primaryColor}
    />
  </svg>
);
