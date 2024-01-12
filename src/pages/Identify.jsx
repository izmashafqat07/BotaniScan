import React, { useState, useRef } from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import IdentifyBreadCrumb from './../components/IdentifyBreadCrumb';

const Identify = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [identificationType, setIdentificationType] = useState(null);
  const [identificationResults, setIdentificationResults] = useState(null);
  const cameraRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleTakePhoto = () => {
    setShowCamera(true);
  };

  const handleCameraPhoto = (dataUri) => {
    setSelectedFile(dataUri);
    setShowCamera(false);
  };

  const handleCameraError = (error) => {
    console.error('Error accessing camera:', error);
  };

  const handleRadioChange = (event) => {
    setIdentificationType(event.target.value);
  };
  const handleDetection = async () => {
    if (!identificationType) {
      alert('Please select an identification type.');
      return;
    }
  
    if (identificationType === 'plantName') {
      console.log('Performing plant name detection...');
      // Add logic for plant name detection
    } else if (identificationType === 'plantDisease') {
      console.log('Performing plant disease detection...');
  
      try {
        const formData = new FormData();
        formData.append('image', selectedFile);
  
        const response = await fetch('https://botanisacan.azurewebsites.net/disease_detect', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          const { predicted_class, confidence, warning } = data;
  
          if (warning) {
            // Handle black and white image warning
            console.warn('Warning:', warning);
            // Display warning message to the user
            setIdentificationResults(`Warning: ${warning}`);
          } else {
            const results = `Disease Detected: ${predicted_class}, Confidence: ${confidence}`;
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
      }
    } else if (identificationType === 'waterLevel') {
      console.log('Performing plant water level detection...');
      // Add logic for plant water level detection
    }
  };
  

  return (
    <>
      <IdentifyBreadCrumb />
      <div className="container-fluid mt-4">
        <div className="row">
          <h2 className='text-center identify-head'>Identify Your Plants Now</h2>
        </div>

        {!showCamera && (
          <div className="container-fluid identify-form-container shadow">
            <div className="row">
              <div className="col-md-6 d-flex flex-column align-items-center identify-form-1">
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
                    <Button component="span" variant="contained" style={{ width: '200px', marginRight: '10px', marginTop: '30px', backgroundColor: '#2c4f40' }}>
                      <BsUpload style={{ marginRight: '10px' }} /> Upload Photo
                    </Button>
                  </label>
                  <Button variant="contained" style={{ width: '200px', marginRight: '10px', marginTop: '30px', backgroundColor: '#2c4f40' }} onClick={handleTakePhoto}>
                    <FaCamera style={{ marginRight: '10px' }} /> Take Photo
                  </Button>
                </div>
                <div className="mt-3">
                  <Button variant="contained" style={{ width: '200px', marginTop: '20px', backgroundColor: '#2c4f40' }} onClick={handleDetection}>
                    Detect
                  </Button>
                </div>
              </div>

              <div className="col-md-6 identify-form-2">
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

        {showCamera && (
          <Camera
            onTakePhoto={(dataUri) => { handleCameraPhoto(dataUri); }}
            onCameraError={(error) => { handleCameraError(error); }}
            imageType={IMAGE_TYPES.PNG}
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            isFullscreen={true}
            isMaxResolution={true}
            ref={cameraRef}
          />
        )}

        <div className="container-fluid result-container shadow">
          <div className="row">
            <h2 className='text-center'>Identification Results</h2>
            {identificationResults && (
              <div className="text-center">
                <p>{identificationResults}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Identify;
