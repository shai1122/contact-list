import React from "react";
import './card.styles.scss';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Card({contact}) {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal =() => {
    console.log("enterred!!!!!!");
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  Modal.setAppElement('#root');

  <Modal
  isOpen={modalIsOpen}
  onAfterOpen={afterOpenModal}
  onRequestClose={closeModal}
  style={customStyles}
  contentLabel="Example Modal"
>
<div className="card">
      {/* <img className="image" src={contact.profile_image} alt=""></img>
      <span className="name">{contact.name}</span>
      <div>{contact.job}| @{contact.company_name} </div>
      <div className="more-details">
        <div>Phone Number {contact.phone}</div>
        <div>{contact.email}</div>
      </div> */}

    </div>

</Modal>

  return (
    <div className="card" onClick={()=>{openModal()}}>
      <img className="image" src={contact.profile_image} alt=""></img>
      <span className="name">{contact.name}</span>
      <div>{contact.job}| @{contact.company_name} </div>
      <div className="more-details">
        <div>Phone Number {contact.phone}</div>
        <div>{contact.email}</div>
      </div>

    </div>
  );
}
export default Card;