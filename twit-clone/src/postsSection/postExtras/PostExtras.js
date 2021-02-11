import React from "react";
import "./PostExtras.css";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function PostExtras() {
  return (
    <div className="extras_fixedContainer">
      <div className="searchBlock">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Twitter"
          className="searchBlock_input"
        />
      </div>
      <div className="whatsHappeningBlock">
        <h2>What's Happening</h2>
        <div className="happening_item_container">
          <div className="happening_item_text">
            <p>hot food - 22 minutes ago</p>
            <h4>BURGERS vs Hotdoges</h4>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="happening_item_container">
          <div className="happening_item_text">
            <p>hot food - 22 minutes ago</p>
            <h4>BURGERS vs Hotdoges</h4>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="happening_item_container">
          <div className="happening_item_text">
            <p>hot food - 22 minutes ago</p>
            <h4>BURGERS vs Hotdoges</h4>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="happening_item_container">
          <div className="happening_item_text">
            <p>hot food - 22 minutes ago</p>
            <h4>BURGERS vs Hotdoges</h4>
          </div>
          <MoreHorizIcon />
        </div>
        <p className="showMore_link">Show More</p>
      </div>
      <div className="whoToFollow_container">
        <h3>Who to follow</h3>
        <div className="followProfile_container">
          <div className="followUserInfo_contianer">
            <AccountCircleIcon className="avatarIcon" />
            <div>
              <h5>
                APEX Legends News <CheckCircleIcon />
              </h5>
              <p>@apexlegendsnews</p>
            </div>
          </div>
          <button>Follow</button>
        </div>

        <p className="showMore_link">Show More</p>
      </div>
      <div className="termsAndCondition_container">
        <p>Terms of service</p>
        <p>privacy policy</p>
        <p>cookie policy</p>
        <p>more items</p>
      </div>
    </div>
  );
}

export default PostExtras;
