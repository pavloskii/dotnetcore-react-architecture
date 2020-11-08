import * as React from "react";
import { useAuth } from "../../context/AuthContext";
import {
  LoginActions,
  LogoutActions,
  ApplicationPaths,
  QueryParameterNames
} from "../../constants/apiAuthorizationConstants";
import FullPageSpinner from "../../components/FullPageSpinner/FullPageSpinner";

type OidcLoginProps = {
  action: string;
};

const OidcLogin: React.FC<OidcLoginProps> = ({ action }) => {
  const { login, loginCallback, logoutCallback } = useAuth();

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
        case LogoutActions.LogoutCallback:
          if (logoutCallback !== undefined) {
            logoutCallback();
          }
          break;
        case LoginActions.Register:
          window.location.replace(
            `${window.location.origin}${
              ApplicationPaths.IdentityRegisterPath
            }?${QueryParameterNames.ReturnUrl}=${encodeURI(
              ApplicationPaths.Login
            )}`
          );
          break;
        default:
          throw new Error(`Invalid action '${action}'`);
      }
    };

    executeAction();
  }, [action, login, loginCallback, logoutCallback]);

  return <FullPageSpinner />;
};

export default OidcLogin;
