import * as React from "react";
// import { LoginActions, AuthStatus } from "../../constants/apiAuthorizationConstants";
// import authService from "../../api/authService";
type OidcLoginProps = {
  action: string;
};

const OidcLogin: React.FC<OidcLoginProps> = ({ action }) => {
  
  // const login = async () => {
  //   const state = { returnUrl };
  //   const result = await authService.signIn(state);
  //   switch (result.status) {
  //     case AuthStatus.Redirect:
  //       break;
  //     case AuthStatus.Success:
  //       await this.navigateToReturnUrl(returnUrl);
  //       break;
  //     case AuthStatus.Fail:
  //       this.setState({ message: result.message });
  //       break;
  //     default:
  //       throw new Error(`Invalid status result ${result.status}.`);
  //   }
  // };

  // React.useEffect(() => {
  //   const action = this.props.action;
  //   switch (action) {
  //     case LoginActions.Login:
  //       this.login(this.getReturnUrl());
  //       break;
  //     case LoginActions.LoginCallback:
  //       this.processLoginCallback();
  //       break;
  //     case LoginActions.LoginFailed:
  //       const params = new URLSearchParams(window.location.search);
  //       const error = params.get(QueryParameterNames.Message);
  //       this.setState({ message: error });
  //       break;
  //     default:
  //       throw new Error(`Invalid action '${action}'`);
  //   }
  // }, []);
  return <div></div>;
};

export default OidcLogin;
