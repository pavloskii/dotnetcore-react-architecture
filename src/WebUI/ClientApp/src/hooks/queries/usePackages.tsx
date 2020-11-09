import { useQuery } from "react-query";
import {
  PackagesApi,
  PackagesVm,
  SwaggerException
} from "../../services/apiService";


const getPackages = async () => {
  const packagesApi = new PackagesApi();
  return await packagesApi.get();
};

const usePackages = () => {
  return useQuery<PackagesVm, SwaggerException>("packages", getPackages);
};

export { usePackages };
