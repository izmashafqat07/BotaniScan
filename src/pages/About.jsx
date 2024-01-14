// Import necessary dependencies and assets
import React, { useState, useEffect } from 'react';
import './../styles/about.css';
import aboutgif from './../assets/aboutgif.webp';
import vc from './../assets/vc.jpg';
import ai from './../assets/ai.avif';
import machinelearning from './../assets/machinelearning.avif';
import teamMember1 from './../assets/inshara.jpg';
import teamMember2 from './../assets/sahil.jpg';
import teamMember3 from './../assets/mahnoor.jpg';
import teamMember4 from './../assets/izma.jpg';
import teamMember5 from './../assets/aqsa.jpg';

const About = () => {
   // State for the typing animation in the hero section
  const [typedText, setTypedText] = useState('');
  const targetText = 'BotaniScan';

  useEffect(() => {
      // Animation effect for typing text
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText(targetText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === targetText.length) {
        clearInterval(intervalId);
      }
    }, 300);
   // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const teamMembers = [
    {
      name: 'Inshara Iqbal',
      image: teamMember1,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod dolor vitae efficitur gravida.',
    },
    {
      name: 'Sahil Krishna',
      image: teamMember2,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod dolor vitae efficitur gravida.',
    },
    {
      name: 'Mahnoor Iqbal',
      image: teamMember3,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod dolor vitae efficitur gravida.',
    },
    {
      name: 'Izma Shafqat',
      image: teamMember4,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod dolor vitae efficitur gravida.',
    },
    {
      name: 'Aqsa Zaib',
      image: teamMember5,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod dolor vitae efficitur gravida.',
    },
  ];

  return (
    <>
    {/* Hero section */}
      <div className="container col-xxl-12 px-4 py-5 hero-container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className=" col-sm-12 col-lg-4 hero-img-div">
            {/* Hero image */}
            <img
              src={aboutgif}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="300"
              height="400"
              loading="lazy"
            />
          </div>
          <div className=" col-lg-6 ms-lg-6 hero-txt-container">
           {/* Hero title with typing animation */}
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">At {typedText}</h1>\
              {/* Hero description */}
            <p className="lead">
              we believe that connecting with nature enhances our well-being and deepens our understanding of the world
              around us. Our platform is designed to empower you with the knowledge and tools to identify, appreciate, and
              learn about the diverse plant life that surrounds you.
            </p>
          </div>
        </div>
      </div>
       {/* Technology section */}
      <h1 className="text-center tech-head">Advanced Technology At Work</h1>
      <div className="container feature-technology">
      {/* Cards showcasing advanced technologies */}
        <div className="card shadow" style={{ width: '18rem' }}>
          <img src={machinelearning} className="card-img-top" alt="..." height="180px" width="100px" />
          <div className="card-body">
            <h5 className="card-title text-center">Machine Learning</h5>
            <p className="card-text">
              Utilizes advanced machine learning algorithms to constantly improve plant recognition accuracy.
            </p>
          </div>
        </div>
        <div className="card shadow" style={{ width: '18rem' }}>
          <img src={vc} className="card-img-top" alt="..." height="180px" />
          <div className="card-body">
            <h5 className="card-title text-center">Computer Vision</h5>
            <p className="card-text ">
              Employs computer vision techniques to analyze leaf patterns for disease detection{' '}
            </p>
          </div>
        </div>
        <div className="card shadow" style={{ width: '18rem' }}>
          <img src={ai} className="card-img-top" alt="..." height="180px" />
          <div className="card-body">
            <h5 className="card-title  text-center">AI innovation</h5>
            <p className="card-text">
              Brings cutting-edge AI technology to gardeners and botanists, plant care and research.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <h1 className="text-center mt-5">Our Team</h1>
      <div className="container team-members mt-4">
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-2 mb-4">
              <div className="team-member-circle">
                <img src={member.image} className="team-member-image" alt={`Team Member ${index + 1}`} />
                <p className="text-center team-member-name">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
