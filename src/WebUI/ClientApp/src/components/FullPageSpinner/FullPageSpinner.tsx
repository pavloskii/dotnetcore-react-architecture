import * as React from "react";
import Spinner from "../lib/Spinner";
import "./FullPageSpinner.scss";

const FullPageSpinner: React.FC = () => {
  return (
    <div className="FullPageSpinner d-flex justify-content-center align-items-center">
      <Spinner style={{ height: "5rem", width: "5rem" }} />
    </div>
  );
};

export default FullPageSpinner;
