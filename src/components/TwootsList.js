import React from "react";
import generalUserImg from "./../images/user-profile-img.png";
import Twoot from "./Twoot";

const mainTwootsList = [
  {
    name: "JD Johns",
    twoot: "Went skiing today!"
  }, 
  {
    name: "Clara Baker",
    twoot: "Home studying code. Coding is fun!"
  }, 
  {
    name: "Manuel Ricardo",
    twoot: "Working out day."
  }
];

function TwootsList(){
  return(
    <React.Fragment>
      <hr/>
      {mainTwootsList.map((twoot, index) =>
      <Twoot name={twoot.name}
        twoot={twoot.twoot}
        image={generalUserImg}
        key={index} />
      )}
    </React.Fragment>
  );
}

export default TwootsList;