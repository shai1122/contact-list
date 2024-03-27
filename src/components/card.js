import React from "react";

function Card({ contact }) {
  return (
    <div className="contact">
      <img src={contact.profile_image} alt=""></img>
    </div>
  );
}
export default Card;