import React, { useState } from 'react';
import UploadModal from './UploadModal';
import "./styles/ImagePage.css"
import ImageModal from './ImageModal';



const ImagePage = () => {
  const [isImageOpen, setImageModalOpen] = useState(false);
  const [isUploadOpen, setUploadModalOpen] = useState(false);

  const [images, setImages] = useState([]);
  const[url,setUrl]=useState();
  // const[title,settitle]=useState();


  const openImageModal = () => {
    setImageModalOpen(true);
  };

  
  const openUploadModal = () => {
    setUploadModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };
  const closeUploadModal = () => {
    setUploadModalOpen(false);
  };

  const handleSubmit = (data) => {
    setImages([...images, data]);
  };
  
  const handleClickImage = (value) => {
    setUrl(value.title);
    openImageModal();
  };
  console.log(images)
 
  return (
    <div className='imagepage-div'>
      <div className='add-image-div'>
      <h1>Image Page</h1>
      <button onClick={openUploadModal}>Add Image</button>
      <UploadModal
        isUploadOpen={isUploadOpen}
        setUploadModalClose={setUploadModalOpen}
        onSubmit={handleSubmit}
      />
      </div>

    
<div className='display-image'>
{images.map((value, index) => (
  
        <div key={index}>
          <h2>{value.title}</h2>
          <img
              src={value.image}
              alt={value.title}
              onClick={() => handleClickImage(value)}
            />
          {/* <img src={value.image} alt={value.title}/> */}
          <ImageModal
            isImageOpen={isImageOpen}
            setImageModalClose={setImageModalOpen}
            // onSubmit={handleSubmit}
            url={url}

      />
          <p>{value.description}</p>
        </div>
      ))}
</div>
       
    </div>
  );
};

export default ImagePage;
