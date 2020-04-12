import React from "react";

export default ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{post.title}</h6>
      </div>
    </div>
  );
};
