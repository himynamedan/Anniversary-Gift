// src/pages/GiftsPage.js
import React from 'react';
import gift0 from '../Assets/band3.jpg';
import gift1 from '../Assets/band1.jpg';
import gift2 from '../Assets/band2.jpg';
import gift3 from '../Assets/drawing1.jpg';
import gift4 from '../Assets/drawing2.jpg';
import gift5 from '../Assets/drawing3.jpg';
import gift6 from '../Assets/drawing4.jpg';
import gift7 from '../Assets/flower.jpg';
import gift8 from '../Assets/flower2.jpg';
import gift9 from '../Assets/flowers.jpg';
import gift10 from '../Assets/flowers2.jpg';
import gift11 from '../Assets/flowers3.jpg';
import gift12 from '../Assets/flowers4.jpg';
import gift13 from '../Assets/flowers5.jpg';
import gift14 from '../Assets/dil.jpg';
import gift15 from '../Assets/hearts1.jpg';
import gift16 from '../Assets/hearts2.jpg';
import gift17 from '../Assets/keychain1.jpg';
import gift18 from '../Assets/writing1.jpg';
import gift19 from '../Assets/writings2.jpg';
import gift20 from '../Assets/flowers6.jpg';
import gift21 from '../Assets/drawing5.jpg';
import gift22 from '../Assets/drawing6.jpg';
import gift23 from '../Assets/drawing7.jpg';
import gift24 from '../Assets/flower3.jpg';
import gift25 from '../Assets/flower4.jpg';
import gift26 from '../Assets/flowers7.jpg';
import gift27 from '../Assets/flowers8.jpg';
import gift28 from '../Assets/flowers9.jpg';
import './image.css';  // Using the generic ImagePage CSS

const GiftsPage = () => {
  return (
    <div className="container">
      <h1>Cute Gifts We've Exchanged</h1>
      <p>Our relationship is very different from others.</p>
      <p>So, our gifts are also very different from others.</p>
      <p>Our gifts are not materialistic, but they're straight from our hearts.</p>
      <p>And they mean everything to us!</p>
      <p>Here's are some cute gifts we've given to each other:</p>
      <div className='image-container'>
        <img src={gift0} alt="Message Screenshot 2" className="gift" />
        <img src={gift2} alt="Message Screenshot 2" className="gift" />
        <img src={gift1} alt="Message Screenshot 1" className="gift" />
        <img src={gift3} alt="Message Screenshot 1" className="gift" />
        <img src={gift4} alt="Message Screenshot 2" className="gift" />
        <img src={gift5} alt="Message Screenshot 2" className="gift" />
        <img src={gift6} alt="Message Screenshot 2" className="gift" />
        <img src={gift7} alt="Message Screenshot 2" className="gift" />
        <img src={gift8} alt="Message Screenshot 2" className="gift" />
        <img src={gift9} alt="Message Screenshot 2" className="gift" />
        <img src={gift10} alt="Message Screenshot 2" className="gift" />
        <img src={gift11} alt="Message Screenshot 2" className="gift" />
        <img src={gift12} alt="Message Screenshot 2" className="gift" />
        <img src={gift13} alt="Message Screenshot 2" className="gift" />
        <img src={gift14} alt="Message Screenshot 2" className="gift" />
        <img src={gift15} alt="Message Screenshot 2" className="gift" />
        <img src={gift16} alt="Message Screenshot 2" className="gift" />
        <img src={gift18} alt="Message Screenshot 2" className="gift" />
        <img src={gift19} alt="Message Screenshot 2" className="gift" />
        <img src={gift20} alt="Message Screenshot 2" className="gift" />
        <img src={gift21} alt="Message Screenshot 2" className="gift" />
        <img src={gift22} alt="Message Screenshot 2" className="gift" />
        <img src={gift23} alt="Message Screenshot 2" className="gift" />  
        <img src={gift24} alt="Message Screenshot 2" className="gift" />  
        <img src={gift25} alt="Message Screenshot 2" className="gift" />
        <img src={gift26} alt="Message Screenshot 2" className="gift" />
        <img src={gift27} alt="Message Screenshot 2" className="gift" />
        <img src={gift28} alt="Message Screenshot 2" className="gift" />  
        <img src={gift17} alt="Message Screenshot 2" className="gift" />
      </div>
    </div>
  );
};

export default GiftsPage;
