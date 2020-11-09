import React from "react";

const AllPackages: React.FC = () => {
  return (
    <div className="card-columns">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
        <div className="card p-3">
          <div className="d-flex flex-row mb-3">
            <img src="https://i.imgur.com/42SqVZd.png" width="70" />
            <div className="d-flex flex-column ml-2">
              <span>Dropbox</span>
              <span className="text-black-50">File Management</span>
              <span className="ratings">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
          <h6>
            Use dropbox to sync your photos to our platform and share it with
            others.
          </h6>
          <div className="d-flex justify-content-between install mt-3">
            <span>Installed 1234 times</span>
            <span className="text-primary">
              View&nbsp;<i className="fa fa-angle-right"></i>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPackages;
