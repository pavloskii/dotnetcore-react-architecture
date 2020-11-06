import {
  Log,
  User,
  UserManager,
  UserManagerSettings,
  WebStorageStateStore
} from "oidc-client";
import {
  ApplicationPaths,
  ApplicationName
} from "../constants/apiAuthorizationConstants";

export class AuthService {
  public userManager: UserManager;

  constructor(settings: UserManagerSettings) {
    this.userManager = new UserManager(settings);
    Log.logger = console;
    Log.level = Log.INFO;
  }

  public static async create(): Promise<AuthService> {
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

    return new AuthService(settings);
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect({ useReplaceToNavigate: true, data: undefined });
  }

  public async loginCallback(): Promise<User> {
    return await this.userManager.signinCallback(window.location.href);
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }
}
