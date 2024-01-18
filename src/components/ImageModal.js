import React, { useState } from 'react';
import Modal from "react-modal";

const ImageModal = ({isImageOpen, setImageModalClose,url})=> {
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
			isOpen={isImageOpen}
			onRequestClose={() => {
				setImageModalClose(false);
			}}
		>
			<div onClick={() => {
						setImageModalClose(false);
					}}>
				&times;
			</div>
            <div>{url}</div>
           
			
		</Modal>
        )

}

export default ImageModal