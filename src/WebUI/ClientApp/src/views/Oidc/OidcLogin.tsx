import * as React from "react";
import { useAuth } from "../../context/AuthContext";
import { LoginActions } from "../../constants/apiAuthorizationConstants";

type OidcLoginProps = {
  action: string;
};

const OidcLogin: React.FC<OidcLoginProps> = ({ action }) => {
  const { login, loginCallback } = useAuth();

  React.useEffect(() => {
    const executeAction = async () => {
      switch (action) {
        case LoginActions.Login:
          await login();
          break;
        case LoginActions.LoginCallback:
          this.processLoginCallback();
          break;
        default:
          throw new Error(`Invalid action '${action}'`);
      }
    };
  }, []);

  return <div>Loading....Login.....</div>;
};

export default OidcLogin;
