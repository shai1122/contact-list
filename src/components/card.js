import React from "react";

function Card(props) {
  console.log("here!!!!", props.data);
  return (
    <div className="contact">
      <img src={props.data.profile_image} alt=""></img>
    </div>
  );
}
export default Card;