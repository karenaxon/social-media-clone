import React from "react";
import Header from "./Header";
import User from "./User";
import Newsfeed from "./Newsfeed";
import Trending from "./Trending";
import SuggestedFriends from "./SuggestedFriends";
import userImage from "./../images/cat-user.jpeg";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-3">
            <User name="Cat" image={userImage} description="Epicodus student ready to learn to code."/>
            <Trending />
          </div>
          <div class="col-6">
            <Newsfeed />
          </div>
          <div class="col-3">
            <SuggestedFriends />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;