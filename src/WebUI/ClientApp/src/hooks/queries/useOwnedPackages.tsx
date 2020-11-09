import { useQuery } from "react-query";
import {
  UserOwnedPackagesApi,
  SwaggerException,
  UserOwnedPackagesVm
} from "../../services/apiService";

const getOwnedPackages = async () => {
  const api = new UserOwnedPackagesApi();
  return await api.get();
};

const useOwnedPackages = () => {
  return useQuery<UserOwnedPackagesVm, SwaggerException>(
    "owned-packages",
    getOwnedPackages
  );
};

export { useOwnedPackages };
