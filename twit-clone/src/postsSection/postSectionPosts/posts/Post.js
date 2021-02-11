import React from "react";
import "./Post.css";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Post() {
  return (
    <div className="posts_container">
      <AccountCircleIcon className="avatarIcon" />
      <div className="userPost_container">
        <div className="userPost_header">
          <div className="userPost_header_username">
            <h4>Apex Legends</h4>
            <CheckCircleIcon />
            <p>@PlayApex - 22h</p>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="userPost_text_container">
          <div className="userPost_textContent">
            <h2>PLAY MORE GAMEZ BABY</h2>
          </div>
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
