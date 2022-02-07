import React from "react";
import userImage from "./../images/user-profile-img.png"

function SuggestedFriends(){
  const userImgStyle = {
    height: '75px',
    width: '75px',
    margin: '5px',
    float: 'left'
  }
  
  return(
    <React.Fragment>
      <div class="card">
        <img src={userImage} style = {userImgStyle}/>
        <h4>Name 1</h4>
        <button class="btn btn-info">Follow</button>
      </div>
      <br/>
      <div class="card">
        <img src={userImage} style = {userImgStyle}/>
        <h4>Name 2</h4>
        <button class="btn btn-info">Follow</button>
      </div>
      <br/>
      <div class="card">
        <img src={userImage} style = {userImgStyle}/>
        <h4>Name 3</h4>
        <button class="btn btn-info">Follow</button>
      </div>

    </React.Fragment>
  )
}

export default SuggestedFriends;