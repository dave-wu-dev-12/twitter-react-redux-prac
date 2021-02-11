import React from "react";
import "./PostSection.css";
import PostSectionHeader from "./postSectionHeader/PostSectionHeader";
import PostInput from "./postSectionPosts/PostInput";
import Post from "./postSectionPosts/posts/Post";
import PostExtras from "./postExtras/PostExtras";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function PostSection() {
  const dispatch = useDispatch();
  const counterRedux = useSelector((state) => state.counter);

  return (
    <div className="postSection_container">
      <div className="feed_container">
        <PostSectionHeader />
        <PostInput />
        <hr />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="extra_container">
        <PostExtras />
      </div>
    </div>
  );
}

export default PostSection;
