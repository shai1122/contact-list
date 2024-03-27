import React from "react";
import './card.styles.scss';

function Card({contact}) {
  return (
    <div className="card">
      <img className="image" src={contact.profile_image} alt=""></img>
      <span className="name">{contact.name}</span>
      <div>{contact.job}| @{contact.company_name} </div>

    </div>
  );
}
export default Card;