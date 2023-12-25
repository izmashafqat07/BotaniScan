import React,{useState} from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa';
import Button from '@mui/material/Button';
import './../styles/identify.css';

const Identify = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      document.body.appendChild(video);
      video.srcObject = stream;

      video.onloadedmetadata = () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const photoURL = canvas.toDataURL('image/png');
        
        setSelectedFile(photoURL);
        
        // Stop the video stream and remove the video element
        stream.getTracks().forEach(track => track.stop());
        document.body.removeChild(video);
      };
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

 
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col d-flex align-items-center ml-4 " style={{ marginLeft: '40px',marginTop:"10px" }}>
           
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ml-2">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <li key={name} className={`breadcrumb-item ${isLast ? 'active' : ''}`} aria-current={isLast ? 'page' : ''}>
                      {isLast ? name : <Link to={routeTo}>{name}</Link>}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <h2 className='text-center identify-head'>Identify Your Plants Now</h2>
        </div>
        

<div className="container-fluid identify-form-container shadow" >
  <div className="row">
  <div className="col-md-6 d-flex flex-column align-items-center identify-form-1">
      {/* Box 1 content */}
      <div className="box text-center mb-3" style={{ height: '150px', width: '150px', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {selectedFile ? (
          <img src={selectedFile} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
        <Button variant="contained" style={{ width: '200px', marginRight: '10px', marginTop: '30px', backgroundColor: '#2c4f40' }}>
          <FaCamera style={{ marginRight: '10px' }} /> Take Photo
        </Button>
      </div>
      <div className="mt-3">
        <Button variant="contained" style={{ width: '200px', marginTop: '20px', backgroundColor: '#2c4f40' }}>
          Detect
        </Button>
      </div>
    </div>

    <div className="col-md-6 identify-form-2">
      {/* Box 2 content */}
      <div className="box">
        <p>What do you want to identify?</p>
        <form>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="identification" id="plantName" value="plantName" />
            <label className="form-check-label" htmlFor="plantName" style={{ marginLeft: '5px', marginBottom: "10px" }}>
              Plant Name
            </label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="identification" id="plantDisease" value="plantDisease" />
            <label className="form-check-label" htmlFor="plantDisease" style={{ marginLeft: '5px', marginBottom: "10px" }}>
              Plant Disease
            </label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="identification" id="waterLevel" value="waterLevel" />
            <label className="form-check-label" htmlFor="waterLevel" style={{ marginLeft: '5px', marginBottom: "10px" }}>
              Plant Water Level
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid result-container shadow">
  <div className="row">
  <h2 className='text-center'>Identification Results</h2>
  </div>
</div>



      </div>
    </>
  );
}

export default Identify;
