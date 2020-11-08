import * as React from "react";

type SpinnerProps = {
  color?: "primary" | "secondary" | "success" | "danger" | "light";
  small?: boolean;
  [prop: string]: any;
};

const Spinner: React.FC<SpinnerProps> = ({ color = "success", small = false, ...props }) => {
  return (
    <div
      className={`spinner-border text-${color} ${
        small ? "spinner-border-sm" : ""
      }`}
      role="status"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
