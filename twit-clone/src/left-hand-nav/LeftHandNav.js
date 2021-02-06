import React from "react";
import "./LeftHandNav.css";
import LeftHandNavItem from "./left-hand-nav-item/LeftHandNavItem";
import UserInfo from "./userInfo/UserInfo";

function LeftHandNav() {
  const leftHandNavItems = ["Home", "Explore", "Notifications", "Messages"];
  let leftHandNavItemsHandler = null;
  leftHandNavItemsHandler = leftHandNavItems.map((item) => {
    return <LeftHandNavItem text={item} />;
  });
  leftHandNavItemsHandler.unshift(<LeftHandNavItem text="" />);

  return (
    <div className="leftHandNav_Container">
      <div className="leftHandNav_Content">
        <div>
          {leftHandNavItemsHandler}
          <button className="tweetButton">Tweet</button>
        </div>

        <UserInfo />
      </div>
    </div>
  );
}

export default LeftHandNav;
