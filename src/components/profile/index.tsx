import React from "react"
import "./styles.scss"

const Profile = () => (
  <div className="profile">
    <img
      className="profile__image"
      src={require("../../assets/avatar.png")}
    ></img>
    <div className="profile__text">
      <div>Blog by Tjin Au Yeung</div>
      <div>Software consultant. Currently at Xebia</div>
    </div>
  </div>
)

export default Profile
