import type { ButtonProps } from "../types/interfaces";

function Button({
  type = "primary",
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${type}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
