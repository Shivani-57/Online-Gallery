// Modal.js
import React, { useState } from 'react';
import Modal from "react-modal";

const UploadModal = ({ isUploadOpen,  setUploadModalClose, onSubmit }) => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ image, title, description });
    setUploadModalClose(false)
  };

  return (
    <Modal style={{
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0, 0.5) ",
        },
        content: {
            position: "absolute",
            border: "1px solid #ccc",
            background: "rgba(255, 255, 255, 0.5)",
            overflow: "hidden",
            left:"32%",
            borderRadius: "4px",
            outline: "none",
            padding: "15px",
            border:"none",
            width: "fit-content",
        },
    }}
			isOpen={isUploadOpen}
			onRequestClose={() => {
				setUploadModalClose(false);
			}}
		>
			<div onClick={() => {
						setUploadModalClose(false);
					}}>
				&times;
			</div>
            <div className='modal-form-div'>
            <form onSubmit={handleSubmit} method='post'>
         
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button onClick={() => {
						setUploadModalClose(false);
					}}>cancel</button>
          </div>
        </form>
            </div>
			
		</Modal>

  );
};

export default UploadModal;
