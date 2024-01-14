// Import necessary dependencies and assets
import React, { useState, useRef } from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import CircularProgress from '@mui/material/CircularProgress';
import 'react-html5-camera-photo/build/css/index.css';
import IdentifyBreadCrumb from './../components/IdentifyBreadCrumb';
import './../styles/identify.css';

const Identify = () => {
   // Hook to get the current location
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  // State variables
  const [selectedFile, setSelectedFile] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [identificationType, setIdentificationType] = useState(null);
  const [identificationResults, setIdentificationResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef(null);
// Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  // Handle take photo button click
  const handleTakePhoto = () => {
    setShowCamera(true);
  };
  // Handle take photo button click
  const handleCameraPhoto = async (dataUri) => {
    try {
      // Create an image element
      const image = new Image();
      image.src = dataUri;

      // Wait for the image to load
      await new Promise((resolve) => (image.onload = resolve));

      // Create a canvas element
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the image on the canvas
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);

      // Convert the canvas content to a blob with the desired format (e.g., JPEG)
      canvas.toBlob(async (blob) => {
        if (blob) {
          const file = new File([blob], 'camera-photo.jpg', { type: 'image/jpeg' });

          // Print resolution to the console
          console.log('Image Resolution:', image.width, 'x', image.height);

          setSelectedFile(file);
          setShowCamera(false);

          if (identificationType) {
            await handleDetection();
          }
        }
      }, 'image/jpeg', 1.0);
    } catch (error) {
      console.error('Error converting data URI to Blob:', error);
    }
  };
 // Handle camera error
  const handleCameraError = (error) => {
    console.error('Error accessing camera:', error);
  };
 // Handle radio button change for identification type
  const handleRadioChange = (event) => {
    setIdentificationType(event.target.value);
  };
// Handle detection button click
  const handleDetection = async () => {
    if (!identificationType) {
      alert('Please select an identification type.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('identificationType', identificationType);

      if (identificationType === 'plantDisease') {
        formData.append('image', selectedFile);
        await sendToBackend('https://botanisacan.azurewebsites.net/disease_detect', formData, 'disease');
      } else if (identificationType === 'plantName') {
        formData.append('image', selectedFile);
        await sendToBackend('https://botanisacan.azurewebsites.net/classify', formData, 'plantName');
      } else if (identificationType === 'waterLevel') {
        formData.append('image', selectedFile);
        await sendToBackend('https://botanisacan.azurewebsites.net/water_estimation', formData, 'waterLevel');
      }
    } catch (error) {
      console.error('Error preparing and sending data to the backend:', error);
    } finally {
      setLoading(false);
    }
  };
 // Send data to the backend for processing
  const sendToBackend = async (url, formData, resultType) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const { predicted_class, confidence, warning } = data;

        if (warning) {
          console.warn('Warning:', warning);
          setIdentificationResults(`Warning: ${warning}`);
        } else {
          let results = '';
          switch (resultType) {
            case 'disease':
              results = (
                <>
                  Disease or not: {predicted_class}
                  <br /> <br />
                  Confidence: {confidence}
                </>
              );
              break;
            case 'plantName':
              results = (
                <>
                  Plant Name: {predicted_class}
                  <br /> <br />
                  Confidence: {confidence}
                </>
              );
              break;
            case 'waterLevel':
              results = (
                <>
                  Water Level: {predicted_class}
                  <br /> <br />
                  Confidence: {confidence}
                </>
              );
              break;
            default:
              results = 'Invalid result type';
              break;
          }
          

          console.log(results);
          setIdentificationResults(results);
        }
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.error || errorData.warning;
        console.error('API Error:', errorMessage);
        setIdentificationResults(`API Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('An error occurred while connecting to the API:', error);
      setIdentificationResults(`API Connection Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {/* call of breadcrumb */}
      <IdentifyBreadCrumb />
      <div className="container-fluid mt-4">
        <div className="row">
          <h2 className='text-center identify-head'>Identify Your Plants Now</h2>
        </div>
{/* form container  */}
        {!showCamera && (
          <div className="container-fluid identify-form-container shadow">
            <div className="row">
              <div className="col-md-6 d-flex flex-column align-items-center identify-form-1 col-sm-12">
                <div className="box text-center mb-3" style={{ height: '150px', width: '150px', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {selectedFile ? (
                    <img src={selectedFile instanceof File ? URL.createObjectURL(selectedFile) : selectedFile} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  ) : (
                    <p className="mb-0" style={{ fontSize: '16px', fontWeight: 'bold' }}>Image</p>
                  )}
                </div>
                <div className="button-row d-flex">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    id="upload-photo"
                  />
                  <label htmlFor="upload-photo">
                  {/* upload photo button  */}
                    <Button className="identify-btns" component="span" variant="contained" style={{ width: '200px', marginRight: '10px', marginTop: '30px', backgroundColor: '#2c4f40' }}>
                      <BsUpload style={{ marginRight: '10px' }} /> Upload Photo
                    </Button>
                  </label>
                     {/* take photo button  */}
                  <Button className="identify-btns" variant="contained" style={{ width: '200px', marginRight: '10px', marginTop: '30px', backgroundColor: '#2c4f40' }} onClick={handleTakePhoto}>
                    <FaCamera style={{ marginRight: '10px' }} /> Take Photo
                  </Button>
                </div>
                   {/* detect button code  */}
                <div className="mt-3">
                  <Button className="identify-btns" variant="contained" style={{ width: '200px', marginTop: '20px', backgroundColor: '#2c4f40' }} onClick={handleDetection}>
                    Detect
                  </Button>
                </div>
              </div>
{/* form for radio input */}
              <div className="col-md-6 identify-form-2 col-sm-12 mt-10">
                <div className="box">
                  <p>What do you want to identify?</p>
                  <form>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="identification"
                        id="plantName"
                        value="plantName"
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label" htmlFor="plantName" style={{ marginLeft: '5px', marginBottom: "10px" }}>
                        Plant Name
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="identification"
                        id="plantDisease"
                        value="plantDisease"
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label" htmlFor="plantDisease" style={{ marginLeft: '5px', marginBottom: "10px" }}>
                        Plant Disease
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="identification"
                        id="waterLevel"
                        value="waterLevel"
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label" htmlFor="waterLevel" style={{ marginLeft: '5px', marginBottom: "10px" }}>
                        Plant Water Level
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
{/* camera component  */}
        {showCamera && (
          <Camera
            onTakePhoto={(dataUri) => { handleCameraPhoto(dataUri); }}
            onCameraError={(error) => { handleCameraError(error); }}
            imageType={IMAGE_TYPES.PNG}
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            isFullscreen={false}
            isMaxResolution={true}
            ref={cameraRef}
          >
            {({ onTakePhoto }) => (
              <div className="text-center mt-3">
                <Button className="identify-btns" variant="contained" style={{ width: '200px', marginTop: '20px', backgroundColor: '#2c4f40' }} onClick={onTakePhoto}>
                  Take Photo
                </Button>
              </div>
            )}
          </Camera>
        )}
{/* identification results box  */}
        <div className="container-fluid result-container shadow col-md-12 col-sm-12">
          <div className="row">
            <h2 className='text-center' style={{marginTop:"20px"}}>Identification Results</h2>
             {/* code for loader */}
            {loading ? (
              <div className="text-center mt-3">
                <CircularProgress />
              </div>
            ) : (
              identificationResults && (
                <div className="text-center">
                  <p style={{fontWeight:"700" , marginTop:"20px"}}> &nbsp; {identificationResults}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Identify;
