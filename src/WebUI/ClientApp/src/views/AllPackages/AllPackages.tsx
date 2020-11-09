import React from "react";
import FullPageSpinner from "../../components/FullPageSpinner/FullPageSpinner";
import { usePackages } from "../../hooks/queries/usePackages";
import PackageCard from "../../components/PackageCard/PackageCard";

const AllPackages: React.FC = () => {
  const { data, error, isLoading } = usePackages();

  return isLoading ? (
    <FullPageSpinner />
  ) : (
    <div className="card-columns">
      {error && <p>There was an error</p>}
      {data !== undefined && data.packages?.map((p) => <PackageCard {...p} key={p.packageId}/>)}
    </div>
  );
};

export default AllPackages;
