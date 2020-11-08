import * as React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  type?: "button" | "reset" | "submit";
  color?: "primary" | "secondary" | "success" | "danger";
  [prop: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  color = "success",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${color}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
