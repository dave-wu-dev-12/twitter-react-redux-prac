import React from "react";
import "./PostInput.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import EventIcon from "@material-ui/icons/Event";
import ShareIcon from "@material-ui/icons/Share";

function PostInput() {
  return (
    <div className="postInput_container">
      <AccountCircleIcon className="avatarIcon" />
      <div className="postInput_form">
        <input
          type="text"
          placeholder="What's happening"
          className="postInput_input"
        />
        <div className="postInput_action">
          <div className="postInput_actionIcons">
            <ImageIcon />
            <GifIcon />
            <ShareIcon />
            <InsertEmoticonIcon />
            <EventIcon />
          </div>
          <button className="tweetButton tweetbuttonPost">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default PostInput;
