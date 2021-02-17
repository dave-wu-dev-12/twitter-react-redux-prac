import { React, useEffect, useRef } from "react";
import "./PostSection.css";
import PostSectionHeader from "./postSectionHeader/PostSectionHeader";
import PostInput from "./postSectionPosts/PostInput";
import Post from "./postSectionPosts/posts/Post";
import PostExtras from "./postExtras/PostExtras";
import axios from "axios";
import Loader from "../loader/Loader";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function PostSection() {
  const dispatch = useDispatch();
  const counterRedux = useSelector((state) => state.counter);
  const setOfPosts = useSelector((state) => state.posts);
  const isPageLoading = useSelector((state) => state.loading);
  const tweetInputRef = useRef("");

  //load posts on page load
  useEffect(() => {
    // set the load screen
    dispatch({ type: "set_loader", loadValue: true });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({ type: "init_posts", posts: res });
      })
      .catch((error) => {});

    return () => {};
  }, []);

  const submitPost = () => {
    dispatch({ type: "set_loader", loadValue: true });

    console.log(tweetInputRef.current.value);
    let postBody = {};
    postBody.title = "drako";
    postBody.body = tweetInputRef.current.value;
    postBody.userId = 1;

    axios
      .post("https://jsonplaceholder.typicode.com/posts", postBody)
      .then((res) => {
        dispatch({ type: "add_post", postToAdd: res.data });
      })
      .catch((error) => {
        // show error message
      });
  };

  // build the list of posts
  let listOfPostsHandler = null;
  listOfPostsHandler = setOfPosts.map((post) => {
    return <Post />;
  });

  return (
    <div className="postSection_container">
      <div className="feed_container">
        <PostSectionHeader />
        <PostInput tweetInputRef={tweetInputRef} submitPost={submitPost} />
        <hr />
        {isPageLoading && <Loader />}
        {listOfPostsHandler}
      </div>
      <div className="extra_container">
        <PostExtras />
      </div>
    </div>
  );
}

export default PostSection;
