import React from "react";
import { extendClassName } from "../../utils";
import "./styles.scss";

const Profile = ({ className }) => (
  <div className={extendClassName("profile", className)}>
    <img className="profile__image" src={require("../../assets/avatar.png")}></img>
    <div className="profile__text">
      <div>written by Tjin Au Yeung</div>
      <div>
        Software consultant @
        <a href="https://www.xebia.com" target="_blank">
          Xebia
        </a>
      </div>
    </div>
  </div>
);

export default Profile;
