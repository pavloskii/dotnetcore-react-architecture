import axios from "axios";

const setInterceptors = (logout: () => Promise<void>) => {
    axios.interceptors.response.use(undefined, (err) => {
    return new Promise(function () {
      if (
        err.response.status === 401 &&
        err.config &&
        !err.config.__isRetryRequest
      ) {
        logout();
      }
      throw err;
    });
  });
};

const setToken = (token: string) => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`
  };

};

export { setInterceptors, setToken };
