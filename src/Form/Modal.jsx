import React from "react";
import "../Form/Modal.css"
import CardList from "./CardList"; 
export const Modal = ({ onSubmit, onCancel, closeModal, children}) => {
  const profile =[
    {
      id: 1,
      day: "Today",
      imgSrc:"https://images.pexels.com/photos/12563416/pexels-photo-12563416.jpeg?auto=compress&cs=tinysrgb&w=600",
      title : "Jewelry Box in Close Up Shot",
      details : "Uploaded on June 21st, 2022"
    },
    { 
      id:2,
      day: "Tuseday/May/7/2024",
      imgSrc: "https://images.pexels.com/photos/9661244/pexels-photo-9661244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title : "Green and White Labeled Bottle",
      details : "Uploaded on June 21st, 2022"
    },
    { 
      id:3,
      day: "Moday/May/12/2024",
      imgSrc:"https://images.pexels.com/photos/14947290/pexels-photo-14947290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title : "Black and White Photo of Eyeglasse ",
      details : "Uploaded on December 1st, 2024"
    }
  ]

  const handleClick = () => {
    // Map over the profile array to create an array of CardList components
    const cardListComponents = profile.map((n) => (
        <CardList key={n.id} {...n} />
    ));

    // Call onSubmit function with the array of CardList components
    onSubmit(cardListComponents);
};

  return (
  <>
     <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="close">&times;</p>
        </div>
        <div className="modal-content">
          {children}
          </div>
        <div className="modal-footer">
        <button
            type="submit"
            className="btn btn-submit"
            // onClick={() => onSubmit("Submit button was clicked")}
            onClick={handleClick}
          >
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-cancel"
            onClick={() => onCancel("Cancel button was clicked")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </>

  );
};
