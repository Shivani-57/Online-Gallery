import React, { useState,useEffect} from 'react';
import UploadModal from './UploadModal';
import "./styles/ImagePage.css"
import ImageModal from './ImageModal';
import { useDispatch, useSelector } from 'react-redux';
import { incCount } from "../actions/index";

const ImagePage = () => {
  const [isImageOpen, setImageModalOpen] = useState(false);
  const [isUploadOpen, setUploadModalOpen] = useState(false);
  

  const [images, setImages] = useState([]);
  const [showimage, setshowImage] = useState("");
  // const [count, setCount] = useState()
  // const[url,setUrl]=useState();
  // const[title,settitle]=useState();

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-images');
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          console.log('Failed to fetch images');
        }
      } catch (err) {
        console.error('Error fetching images', err);
      }
    };

    fetchData();
  }, []);
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

  const handleSubmit = async (data) => {
    setImages([...images, data]);

    try{
      const response = await fetch('http://localhost:5000/image-page',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    console.log(response)
    // if(response.ok){
    //   setUser({ email:"", password:"",})
    //   navigate("/image-page")
    // }
    // else{
    //   alert("Invalid Credentials")
    //   console.log("Invalid Credentials")
    // }
    }
    catch(err){
      console.log("register", err)
    }
   
    
  };

  const handleClickImage = async (value) => {
    try {
      const response = await fetch(`http://localhost:5000/increment-count/${value._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const updatedImages = images.map((image) =>
          image._id === value._id ? { ...image, count: image.count + 1 } : image
        );

        setImages(updatedImages);
        setshowImage({ ...value, count: value.count + 1 });
        openImageModal();
      } else {
        console.error('Failed to increment count on the server');
      }
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };
  // console.log(images)
 
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
        // console.log(index)
          <div key={index}>
          <h2>{index}</h2>
          <img
              src={value.imagelink}
              alt={value.title}
              onClick={() => handleClickImage(value)}
            />
          {/* <img src={value.image} alt={value.title}/> */}
          
          {/* <p>{value.description}</p> */}
        </div>
      ))}
</div>
<ImageModal
            isImageOpen={isImageOpen}
            setImageModalClose={setImageModalOpen}
            image={showimage}
            // count={count}

      />
    </div>
  );
};

export default ImagePage;
