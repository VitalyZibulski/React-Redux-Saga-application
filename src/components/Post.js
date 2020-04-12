import React from "react";

export default ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">Title here {post}</h6>
      </div>
    </div>
  );
};
