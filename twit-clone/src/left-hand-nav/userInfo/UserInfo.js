import React from "react";
import "./UserInfo.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function UserInfo() {
  return (
    <div className="userInfoContainer">
      <AccountCircleIcon />
      <div className="userInfoName">
        <p>jackie chan</p>
        <p>@jackiejack</p>
      </div>
      <MoreHorizIcon />
    </div>
  );
}

export default UserInfo;
