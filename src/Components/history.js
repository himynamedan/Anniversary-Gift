// src/pages/HistoryPage.js
import React from 'react';
import confess1 from '../Assets/confess1.jpg'; 
import confess2 from '../Assets/confess2.jpg';
import handheart from '../Assets/handheart.jpg';
import handheart2 from '../Assets/handheart2.jpg';
import cute2 from '../Assets/cute2.jpg';
import cute3 from '../Assets/cute3.jpg';
import './history.css';  // Importing CSS for this page

const HistoryPage = () => {
  return (
    <div className="history-container">
      <h1>Our Beautiful Love Story</h1>
      <p>
        Once upon an <span style={{ color: '#8B4513' }}>autumn</span> day, under the soft <span style={{ color: '#ADD8E6' }}>October skies</span> of Islamabad, fate brought us together at Taimour bhai’s house. It had been two years of silent admiration, where I watched from afar, my heart whispering your name in every quiet moment.
      </p>
      <p>
        We met, and though we parted soon after, something shifted. The distance between us became unbearable. Each day that followed, I found myself <span style={{ color: '#228B22' }}>missing</span> you more. I knew then, what I had only dreamed of before—my heart had caught <span style={{ color: '#FFA500' }}>fire</span> for you. I had it all planned. <span style={{ color: '#9370DB' }}>December 1st</span>, your <span style={{ color: '#9370DB' }}>birthday</span>, would be the day I would finally tell you the truth. I had the words tucked safely in my phone, waiting for the perfect moment to reveal what my heart had known for so long.
      </p>
      <p>
        But love, as it turns out, waits for no one. I couldn’t bear the weight of those words any longer. On the 7th of November, with nervous excitement, I confessed: "<span style={{ color: '#FF0000' }}>I love you</span>." And in that beautiful moment, the world stood still. To my joy and surprise, you confessed too, and from that day forward, we’ve been bound by <span style={{ color: '#FF0000' }}>love</span>.
      </p>
      <p>
        Three years have passed since that <span style={{ color: '#B0E0E6' }}>magical</span> confession, and though the miles between us stretch long, our <span style={{ color: '#FF0000' }}>love</span> has only grown <span style={{ color: '#FF0000' }}>stronger</span>. Each time we meet, the moments are etched in my heart, like pages of a love story written by the stars themselves. Every touch, every glance, every memory is a reminder of how deeply I cherish you.
      </p>
      <p>
        And here we are today, three years of <span style={{ color: '#FFFF00' }}>laughter</span>, of longing, and of knowing that no matter the distance, our hearts are always close, intertwined forever in this beautiful journey.
      </p>
      <h1>Our Confession</h1>
      {/* Wrap the images inside the image container */}
      <div className="image-container">
        <img src={confess1} alt="Message Screenshot 1" className="screenshot" />
        <img src={confess2} alt="Message Screenshot 2" className="screenshot" />
      </div>
      <h1>Our Cute Bond</h1>
      <p>We share a very cute bond.</p>
      <p>To me, our relation is the cutest one ever.</p>
      <p>Even the tiny things for each other make us really happy.</p>
      <div className='image-container'>
        <img src={handheart} alt="handheart" className='Collage' />
        <img src={handheart2} alt="handheart" className='Collage' />
        
        <img src={cute2} alt="handheart" className='Collage' />
        <img src={cute3} alt="handheart" className='Collage' />
      </div>
      
    </div>
  );
};

export default HistoryPage;
