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
          if (login !== undefined) {
            login();
          }
          break;
        case LoginActions.LoginCallback:
          if (loginCallback !== undefined) {
            loginCallback();
          }
          break;
        default:
          throw new Error(`Invalid action '${action}'`);
      }
    };

    executeAction()
  }, [action, login, loginCallback]);

  return <div>Loading....Login.....</div>;
};

export default OidcLogin;
