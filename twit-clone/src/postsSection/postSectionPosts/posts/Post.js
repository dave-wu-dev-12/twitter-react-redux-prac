import { React, useState } from "react";
import "./Post.css";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Post({ body, title, userId, id, updatePost, deletePost }) {
  const [editMode, setEditMode] = useState(false);
  const [postTitle, setPostTitle] = useState(title);
  const [postBody, setPostBody] = useState(body);

  const beginEditPost = () => {
    // turn text into edit mode
    setEditMode(true);

    // reset input values
    setPostTitle(title);
    setPostBody(body);
  };

  const sumbitEdittedPost = () => {
    let edittedPost = {};
    edittedPost.title = postTitle;
    edittedPost.body = postBody;
    edittedPost.id = id;
    edittedPost.userId = userId;
    updatePost(edittedPost);
    setEditMode(false);
  };

  const beginPostDeletion = () => {
    setEditMode(false);
    deletePost(id);
  };

  // designate post elements here for better readability
  let titleHandler = null;
  titleHandler = editMode ? (
    <input
      className="editInputTitle"
      type="text"
      value={postTitle}
      onChange={(e) => setPostTitle(e.currentTarget.value)}
    />
  ) : (
    <h4>{title}</h4>
  );

  let bodyHandler = null;
  bodyHandler = editMode ? (
    <div>
      <textarea
        name=""
        id=""
        cols="60"
        rows="10"
        value={postBody}
        onChange={(e) => setPostBody(e.currentTarget.value)}
      ></textarea>
      <div className="editBodyButtonContainer">
        <div>
          <button className="editPostButton" onClick={sumbitEdittedPost}>
            UPDATE
          </button>
          <button className="editPostButton" onClick={() => setEditMode(false)}>
            CANCEL
          </button>
        </div>
        <button className="editPostButton" onClick={beginPostDeletion}>
          DELETE
        </button>
      </div>
    </div>
  ) : (
    <h4>{body}</h4>
  );

  return (
    <div className="posts_container">
      <AccountCircleIcon className="avatarIcon" />
      <div className="userPost_container">
        <div className="userPost_header">
          <div className="userPost_header_username">
            {titleHandler}
            <CheckCircleIcon />
            <p>@PlayApex - 22h</p>
          </div>
          <div onClick={beginEditPost}>
            <MoreHorizIcon />
          </div>
        </div>
        <div className="userPost_text_container">
          <div className="userPost_textContent">{bodyHandler}</div>
          <div className="userPost_text_actions">
            <div className="userPost_text_actions_item">
              <ChatBubbleIcon />
            </div>
            <div className="userPost_text_actions_item">
              <ShareIcon />
            </div>
            <div className="userPost_text_actions_item">
              <FavoriteBorderIcon />
            </div>
            <div className="userPost_text_actions_item">
              <PublishIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
