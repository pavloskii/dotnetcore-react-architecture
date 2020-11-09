import * as React from "react";
import { IPackageDto, PackagesApi, InstallPackageCommand } from "../../services/apiService";

const PackageCard: React.FC<IPackageDto> = ({
  imageUrl,
  latestVersion,
  description,
  name,
  packageId
}) => {
  const installPackage = () => {
    const packagesApi = new PackagesApi();
    const command = new InstallPackageCommand();
    command.packageId = packageId;
    packagesApi.install(command);
  };

  return (
    <div className="card p-3">
      <div className="d-flex flex-row mb-3">
        <img src={imageUrl} width="70" alt={description} />
        <div className="d-flex flex-column ml-2">
          <span>{name}</span>
          <span className="text-black-50">{latestVersion}</span>
        </div>
      </div>
      <h6>{description}</h6>
      <div className="d-flex justify-content-between install mt-3">
        {/* TODO Add installed aggregator on packages */}
        <span>Installed {Math.floor(Math.random() * 1000)} times</span>
        <span className="text-success cursor-pointer" onClick={installPackage}>Install</span>
      </div>
    </div>
  );
};

export default PackageCard;
