import * as React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
import landingImage from "../../assets/images/landing.svg";
import { ApplicationPaths } from "../../constants/apiAuthorizationConstants";

const Landing: React.FC = () => {
  return (
    <div className="Landing container">
      <div className="row">
        <div className="col-md-6">
          <h1>Easily upload or download all kind of software packages. </h1>
          <p>
            With FDS by your side you can easily share and redistribute your own
            software packages and make it easy for users to update version.
          </p>
          <div className="pt-5 pb-2">
            <Link
              className="btn btn-success btn-lg mr-3"
              to={ApplicationPaths.Login}
            >
              Login
            </Link>
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
        <a
          href="https://www.flaticon.com/authors/eucalyp"
          title="Eucalyp"
          rel="nofollow"
        >
          Eucalyp
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon" rel="nofollow">
          {" "}
          www.flaticon.com
        </a>
      </footer>
    </div>
  );
};

export default Landing;
