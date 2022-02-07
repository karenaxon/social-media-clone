import React from "react";
import TwootsList from "./TwootsList";
import userImage from "./../images/cat-user.jpeg";

function Newsfeed(){
  const userPicStyle = {
    height: '100px',
    margin: '5px',
  }

  return (
    <React.Fragment>
      <img src={userImage} style={userPicStyle}/>
      <input class="form-control me-2" type="text" placeholder="What's happening?" aria-label="Twoot"/>
      <TwootsList />
    </React.Fragment>
  );
}

export default Newsfeed;