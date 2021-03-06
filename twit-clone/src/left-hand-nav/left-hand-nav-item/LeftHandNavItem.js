import React from "react";
import "./LeftHandNavItem.css";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExploreIcon from "@material-ui/icons/Explore";
import EmailIcon from "@material-ui/icons/Email";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function LeftHandNavItem({ text }) {
  const history = useHistory();
  const dispatch = useDispatch();

  let leftHandNavItemRow = null;
  switch (text) {
    case "Home":
      leftHandNavItemRow = (
        <div
          className="leftHandNavItem_Container"
          onClick={() => navigateToRoute("/")}
        >
          <HomeIcon className="itemIcon" /> <h2>{text}</h2>
        </div>
      );
      break;
    case "Explore":
      leftHandNavItemRow = (
        <div
          className="leftHandNavItem_Container"
          onClick={() => navigateToRoute(`/${text}`)}
        >
          <ExploreIcon className="itemIcon" /> <h2>{text}</h2>
        </div>
      );
      break;
    case "Notifications":
      leftHandNavItemRow = (
        <div
          className="leftHandNavItem_Container"
          onClick={() => navigateToRoute(`/${text}`)}
        >
          <NotificationsIcon className="itemIcon" /> <h2>{text}</h2>
        </div>
      );
      break;
    case "Messages":
      leftHandNavItemRow = (
        <div
          className="leftHandNavItem_Container"
          onClick={() => navigateToRoute(`/${text}`)}
        >
          <EmailIcon className="itemIcon" /> <h2>{text}</h2>
        </div>
      );
      break;

    default:
      leftHandNavItemRow = (
        <img
          onClick={() => navigateToRoute("/")}
          className="siteIconImage"
          src="https://i.pinimg.com/originals/5c/a9/8c/5ca98c73b2bb7a02bf8350933c7ca443.png"
          alt="logo"
        />
      );
      break;
  }

  const navigateToRoute = (path) => {
    if (path !== history.location.pathname) {
      // clear posts before route change
      dispatch({ type: "clear_localPosts", loadValue: true });
      dispatch({ type: "clear_localMessages", loadValue: true });
    }

    // router is smart enough to not rerender a comp if we are on the page
    // and attempt to navigate to it through the push
    history.push(`${path}`);
  };

  return <div>{leftHandNavItemRow}</div>;
}

export default LeftHandNavItem;
