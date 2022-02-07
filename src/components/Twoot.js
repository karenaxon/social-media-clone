import React from "react";
import PropTypes from "prop-types";

function Twoot(props){
  const twootPicStyle = {
    height: '40px',
    margin: '5px',
    float: 'left'
  }
  return (
    <React.Fragment>
      <img src={props.image} id="twootpic" style={twootPicStyle}/>
      <h3>{props.name}</h3>
      <p><em>{props.twoot}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Twoot.propTypes = {
  name: PropTypes.string.isRequired,
  twoot: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Twoot;