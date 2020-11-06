import { Log, User, UserManager, WebStorageStateStore } from "oidc-client";
import {
  ApplicationPaths,
  ApplicationName
} from "../constants/apiAuthorizationConstants";

class AuthService {
  public userManager: UserManager | null = null;

  constructor() {
    Log.logger = console;
    Log.level = Log.INFO;
  }

  public getUser = async (): Promise<User | null> => {
    const userManager = await this.provideUserManager();
    return userManager.getUser();
  };

  public login = async (): Promise<void> => {
    const userManager = await this.provideUserManager();
    return userManager.signinRedirect({
      useReplaceToNavigate: true
    });
  };

  public loginCallback = async (): Promise<User> => {
    const userManager = await this.provideUserManager();
    return await userManager.signinCallback(window.location.href);
  };

  public async logout(): Promise<void> {
    const userManager = await this.provideUserManager();
    return userManager.signoutRedirect();
  }

  provideUserManager = async (): Promise<UserManager> => {
    if (this.userManager !== null) {
      return this.userManager;
    }

    const response = await fetch(ApplicationPaths.ApiAuthConfigurationUrl);

    if (!response.ok) {
      throw new Error(`Could not load settings for '${ApplicationName}'`);
    }

    const settings = await response.json();
    settings.automaticSilentRenew = true;
    settings.includeIdTokenInSilentRenew = true;
    settings.userStore = new WebStorageStateStore({
      prefix: ApplicationName
    });

    const userManager = new UserManager(settings);
    this.userManager = userManager;
    return this.userManager;
  };
}

var authService = new AuthService();

export { authService, AuthService };
