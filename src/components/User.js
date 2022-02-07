import React from "react";
import PropTypes from "prop-types";


function User(props){

  return(
    <React.Fragment>
      <div class="card" id="user-card">
        <img src={props.image}/>
        <h1 class="text-center">Hello {props.name}</h1>
        <p class="text-center" ><em>{props.description}</em></p>
      </div>
    </React.Fragment>
  );
}

User.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

export default User;