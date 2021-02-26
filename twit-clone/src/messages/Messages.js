import { React, useRef, useEffect } from "react";
import "./Messages.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loader from "../loader/Loader";
import axios from "axios";

function Messages() {
  const dispatch = useDispatch();

  const searchInputRef = useRef("");
  const isPageLoading = useSelector((state) => state.loading);
  const setOfMessages = useSelector((state) => state.messages);

  //load posts on page load
  useEffect(() => {
    // set the load screen
    dispatch({ type: "set_loader", loadValue: true });

    // mock server request
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          dispatch({ type: "init_messages", messages: res });
        })
        .catch((error) => {});
    }, 2000);

    return () => {};
  }, []);

  // build the list of posts
  let listOfMessagessHandler = null;
  listOfMessagessHandler = setOfMessages.map((post) => {
    return (
      <div>
        <h3>{post.body}</h3>
        <h6>{post.title}</h6>
      </div>
    );
  });

  return (
    <div className="postSection_container">
      <div className="feed_container">
        <div className="homeSectionContainer">
          <h3>Messages</h3>
        </div>
        <div className="postInput_container">
          <AccountCircleIcon className="avatarIcon" />
          <div className="postInput_form">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for people and groups"
              className="postInput_input"
            />
          </div>
        </div>
        <hr />
        {isPageLoading ? <Loader /> : listOfMessagessHandler}
      </div>
      <div className="extra_container"></div>
    </div>
  );
}

export default Messages;
