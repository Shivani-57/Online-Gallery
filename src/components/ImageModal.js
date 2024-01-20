import React, { useState } from 'react';
import Modal from "react-modal";
import "./styles/previewimage.css"
const ImageModal = ({isImageOpen, setImageModalClose,image,count})=> {
    console.log("From Image MOdal" , image)
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
            background: "rgba(255, 255, 255, 1)",
            overflow: "hidden",
            left:"40%",
            borderRadius: "4px",
            outline: "none",
            padding: "15px",
            border:"none",
            width: "fit-content",
            height:"fit-content"
            
        },
    }}
			isOpen={isImageOpen}
			onRequestClose={() => {
				setImageModalClose(false);
			}}
		>
			<div className='close-button' onClick={() => {
						setImageModalClose(false);
					}}>
				&times;
			</div>
            <div className='preview'>
            <div className='image-preview'>
            <img src={image.imagelink} alt={image.title} width="300px"></img>
            </div>
            <div className='details-preview'>
                <p><strong>Title </strong>: {image.title}</p>
                <p><strong>Description</strong> : {image.description}</p>
                <p><strong>Image Viewed</strong> : {image.count}</p>

            </div>
            </div>
           
			
		</Modal>
        )

}

export default ImageModal