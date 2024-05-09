
import React, { useState } from 'react';
import "../Components/Modal.css";

const Modal = ({ closeModal, onSubmit,defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue ||{
    imgSrc: null,
    title: "",
    detail: ""
  });

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'imgSrc') {
      const file = e.target.files[0]; // Get the first file from the input
      const reader = new FileReader(); // Create a new FileReader instance
  
      reader.onloadend = () => {
        // Once the file is loaded, set it in the form state as a base64 string
        setFormState({ ...formState, imgSrc: reader.result });
      };
  
      if (file) {
        // Read the file as a data URL (base64 string)
        reader.readAsDataURL(file);
      }
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    onSubmit(formState);
    if (!validateForm()) return;
    // console.log(formState);
    closeModal();
  };

  return (
    <div className='modal-container' onClick={(e) => {
      if (e.target.className === "modal-container") closeModal();
    }}>
      <div className='modal'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="title">Title</label>
            <input name="title" value={formState.title} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="detail">Detail</label>
            <input name="detail" value={formState.detail} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="imgSrc">File-Image</label>
            {/* <input type="text" name="imgSrc" onChange={handleChange} /> */}
            <input type="file" name="imgSrc" onChange={handleChange}  />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          {/* <button type='submit' className='btn' onClick={handleSubmit}>Submit</button> */}
          
          <button type='submit' className='btn' onClick={handleSubmit} class="button-30" role="button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
