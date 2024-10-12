// src/pages/PhotosPage.js
import React from 'react';
import us from '../Assets/us.jpg';
import us2 from '../Assets/us2.jpg';
import us3 from '../Assets/us3.jpg';
import us4 from '../Assets/us4.jpg';
import us5 from '../Assets/us5.jpg';
import us6 from '../Assets/us6.jpg';
import us7 from '../Assets/us7.jpg';
import us8 from '../Assets/us8.jpg';
import us9 from '../Assets/us9.jpg';
import us10 from '../Assets/us10.jpg';
import './image.css';  // Using the generic ImagePage CSS

const PhotosPage = () => {
  return (
    <div className="container">
      <h1>Our Photos Together</h1>
      <p>We haven't been able to have cute pictures together...</p>
      <p>But our love is still stronger than that..</p>
      <div className='image-container'>
        
        <img src={us2} alt="collage" className='us' />
        <img src={us} alt="collage" className="us" />
        <img src={us5} alt="collage" className='us' />
        <img src={us3} alt="collage" className='us' />
        <img src={us4} alt="collage" className='us' />
        <img src={us7} alt="collage" className="us" />
        <img src={us8} alt="collage" className="us" />
        <img src={us6} alt="collage" className="us" />
        <img src={us9} alt="collage" className="us" />
        <img src={us10} alt="collage" className="us" />
      </div>
    </div>
  );
};

export default PhotosPage;
