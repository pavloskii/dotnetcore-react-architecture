import * as React from "react";
import {
  IUserOwnedPackageDto,
  UserOwnedPackagesApi,
} from "../../services/apiService";

const InstalledPackage: React.FC<IUserOwnedPackageDto> = ({
  version,
  name,
  packageId
}) => {
  const checkForAvailableUpdate = () => {
    const api = new UserOwnedPackagesApi();
    api.checkForUpdate(version, packageId);
  };

  return (
    <div className="card p-3">
      <div className="d-flex flex-row mb-3">
        <div className="d-flex flex-column ml-2">
          <span>{name}</span>
          <span className="text-black-50">{version}</span>
        </div>
      </div>
      <div className="d-flex justify-content-between install mt-3">
        <span className="text-success cursor-pointer" onClick={checkForAvailableUpdate}>
          Check for Update
        </span>
      </div>
    </div>
  );
};

export default InstalledPackage;
