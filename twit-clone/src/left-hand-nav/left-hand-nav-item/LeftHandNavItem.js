import React from "react";
import "./LeftHandNavItem.css";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExploreIcon from "@material-ui/icons/Explore";
import EmailIcon from "@material-ui/icons/Email";

function LeftHandNavItem({ text }) {
  let leftHandNavItemIcon = null;
  switch (text) {
    case "Home":
      leftHandNavItemIcon = <HomeIcon className="itemIcon" />;
      break;
    case "Explore":
      leftHandNavItemIcon = <ExploreIcon className="itemIcon" />;
      break;
    case "Notifications":
      leftHandNavItemIcon = <NotificationsIcon className="itemIcon" />;
      break;
    case "Messages":
      leftHandNavItemIcon = <EmailIcon className="itemIcon" />;
      break;

    default:
      leftHandNavItemIcon = (
        <img
          className="siteIconImage"
          src="https://i.pinimg.com/originals/5c/a9/8c/5ca98c73b2bb7a02bf8350933c7ca443.png"
          alt="logo"
        />
      );
      break;
  }

  return (
    <div className="leftHandNavItem_Container">
      {leftHandNavItemIcon}
      <h2>{text}</h2>
    </div>
  );
}

export default LeftHandNavItem;
