import type { IconProps } from "../types/interfaces";
import variables from "../css/_variables.module.scss";

export const EditIcon = ({ width = 20, height = 20 }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.58333 17.4167H5.88958L14.85 8.45625L13.5438 7.15L4.58333 16.1104V17.4167ZM2.75 19.25V15.3542L14.85 3.27708C15.0333 3.10903 15.2358 2.97917 15.4573 2.8875C15.6788 2.79583 15.9118 2.75 16.1562 2.75C16.4007 2.75 16.6375 2.79583 16.8667 2.8875C17.0958 2.97917 17.2944 3.11667 17.4625 3.3L18.7229 4.58333C18.9063 4.75139 19.0399 4.95 19.124 5.17917C19.208 5.40833 19.25 5.6375 19.25 5.86667C19.25 6.11111 19.208 6.3441 19.124 6.56562C19.0399 6.78715 18.9063 6.98958 18.7229 7.17292L6.64583 19.25H2.75ZM14.1854 7.81458L13.5438 7.15L14.85 8.45625L14.1854 7.81458Z"
      fill={variables.primaryColor}
    />
  </svg>
);
