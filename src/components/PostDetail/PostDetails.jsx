import React from "react";
import { Link } from "react-router-dom";

import "./PostDetails.scss";

export const PostDetails = ({ post }) => {
  return (
    <div className="PostDetails">
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className="PostDetails__createdBy">{post.createdBy}</p>
      <div className="PostDetails__tags">
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};
