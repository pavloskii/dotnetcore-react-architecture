import * as React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
import landingImage from "../../assets/images/landing.svg";
import { ApplicationPaths } from "../../constants/apiAuthorizationConstants";
import authService from "../../api/authService";

const Landing: React.FC = () => {
  const handleLogin = (): void => {
    authService.signIn();
  };

  return (
    <div className="Landing container">
      <div className="row">
        <div className="col-md-6">
          <h1>Professional Tailwind theme designed for developers. </h1>
          <p>
            With Tailwind you can optimized the customization process to save
            your team time when building websites.{" "}
          </p>
          <div className="py-5">
            <button onClick={handleLogin}>Login</button>
            {/* <Link
              className="btn btn-success btn-lg mr-2"
              to={ApplicationPaths.Login}
            >
              Login
            </Link> */}
            <Link
              className="btn btn-success btn-lg"
              to={ApplicationPaths.Register}
            >
              Register
            </Link>
          </div>
        </div>

        <div className="col-md-6 ">
          <img src={landingImage} alt="" className="img-thumbnail" />
        </div>
      </div>

      <footer className="fixed-bottom text-center mb-3">
        Logo made by{" "}
        <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
          Eucalyp
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </footer>
    </div>
  );
};

export default Landing;
