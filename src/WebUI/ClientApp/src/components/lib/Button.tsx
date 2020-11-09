import * as React from "react";

// type ButtonProps = {
//   children?: React.ReactNode;
//   onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
//   type?: "button" | "reset" | "submit";
//   color?: "primary" | "secondary" | "success" | "danger";
//   [prop: string]: any;
// };

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  type?: "button" | "reset" | "submit";
  color?: "primary" | "secondary" | "success" | "danger";
}

const Button: React.FC<IButtonProps> = ({
  children,
  type = "button",
  color = "success"
}) => {
  return (
    <button type={type} className={`btn btn-outlined btn-${color}`}>
      {children}
    </button>
  );
};

export default Button;
