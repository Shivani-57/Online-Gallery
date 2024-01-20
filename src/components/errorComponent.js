import React, { useState } from 'react';
import { Alert } from 'react-bootstrap'; // Assuming you're using React Bootstrap

function ErrorComponent({errorMessage}) { // Capitalized for a React component
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFetch = async () => {
//     try {
//       const response = await fetch('/api/data');
//       // ...
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'An error occurred');
//     }
//   };

  return (
    <div>
      {/* ... */}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {/* ... */}
    </div>
  );
}

export default ErrorComponent;
