import React from "react";
import "./PostSection.css";
import PostSectionHeader from "./postSectionHeader/PostSectionHeader";
import PostInput from "./postSectionPosts/PostInput";

function PostSection() {
  return (
    <div className="postSection_container">
      <div className="feed_container">
        <PostSectionHeader />
        <PostInput />
      </div>
    </div>
  );
}

export default PostSection;
