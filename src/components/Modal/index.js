import React from "react";

function Modal({ currentPhoto, toggleModal }) {
  const { name, category, description, index } = currentPhoto;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt={`${category}`}
        />
        <p>{description}</p>
        <button type="button" onClick={toggleModal}>
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
