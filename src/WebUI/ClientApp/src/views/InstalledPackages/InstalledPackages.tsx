import React from "react";
import FullPageSpinner from "../../components/FullPageSpinner/FullPageSpinner";
import { useOwnedPackages } from "../../hooks/queries/useOwnedPackages";
import InstalledPackage from "../../components/InstalledPackage/InstalledPackage";

const InstalledPackages: React.FC = () => {
  const { data, error, isLoading } = useOwnedPackages();

  return isLoading ? (
    <FullPageSpinner />
  ) : (
    <div className="card-columns">
      {error && <p>There was an error</p>}
      {data !== undefined && data.userOwnedPackages?.length === 0 && (
        <p>
          You have no installed packages. Please install some from the packages list first.
        </p>
      )}
      {data !== undefined &&
        data.userOwnedPackages?.map((p) => (
          <InstalledPackage {...p} key={p.packageId} />
        ))}
    </div>
  );
};

export default InstalledPackages;
