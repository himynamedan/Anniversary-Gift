// src/pages/MessagesPage.js
import React from 'react';
import text1 from '../Assets/naughty1.jpg';
import text2 from '../Assets/naughty2.jpg';
import text3 from '../Assets/naughty3.jpg';
import text4 from '../Assets/naughty4.jpg';
import text5 from '../Assets/naughty5.jpg';
import text6 from '../Assets/naughty6.jpg';
import text7 from '../Assets/naughty7.jpg';
import text8 from '../Assets/naughty8.jpg';
import text9 from '../Assets/naughty9.jpg';
import text10 from '../Assets/naughty10.jpg';
import text11 from '../Assets/naughty11.jpg';
import text12 from '../Assets/naughty12.jpg';
import text13 from '../Assets/naughty13.jpg';
import message1 from '../Assets/message1.jpg';
import message2 from '../Assets/message2.jpg';
import message3 from '../Assets/message3.jpg';
import message4 from '../Assets/message4.jpg';
import message5 from '../Assets/message5.jpg';
import message6 from '../Assets/message6a.jpg';
import message7 from '../Assets/message6b.jpg';
import message8 from '../Assets/message6c.jpg';
import draw1 from '../Assets/freaky1.jpg';
import draw2 from '../Assets/freaky2.jpg';
import draw3 from '../Assets/freaky3.jpg';
import draw4 from '../Assets/freaky4.jpg';
import './image.css';  // Using the generic ImagePage CSS

const MessagesPage = () => {
  return (
    <div className="container">
      <h1>Our Cute Messages</h1>
      <div className='image-container'>
        <img src={message1} alt="Message Screenshot 1" className="screenshot" />
        <img src={message2} alt="Message Screenshot 2" className="screenshot" />
        <img src={message3} alt="Message Screenshot 2" className="screenshot" />
        <img src={message4} alt="Message Screenshot 2" className="screenshot" />
        <img src={message5} alt="Message Screenshot 2" className="screenshot" />
        <img src={message6} alt="Message Screenshot 2" className="screenshot" />
        <img src={message7} alt="Message Screenshot 2" className="screenshot" />
        <img src={message8} alt="Message Screenshot 2" className="screenshot" />
      </div>
      <p>These are just a few among a billion cute words that we've said to each other !!</p>
      <p>I LOVE YOU SO MUCH MY PRETTY BABY ❤️</p>
      <br></br><br></br>
      <h1>When We Got Naughty</h1>
      <p>These are just a few...</p>
      <p>We both know how freaky we are for each other !!</p>
      <div className='image-container'>
        <img src={text1} alt="screenshot" className="screenshot" />
        <img src={text2} alt="screenshot" className="screenshot" />
        <img src={text3} alt="screenshot" className="screenshot" />
        <img src={text4} alt="screenshot" className="screenshot" />
        <img src={text5} alt="screenshot" className="screenshot" />
        <img src={text6} alt="screenshot" className="screenshot" />
        <img src={text7} alt="screenshot" className="screenshot" />
        <img src={text9} alt="screenshot" className="screenshot" />
        <img src={text10} alt="screenshot" className="screenshot" />
        <img src={text12} alt="screenshot" className="screenshot" />
        <img src={text13} alt="screenshot" className="screenshot" />
        <img src={text8} alt="screenshot" className="screenshot" />
        <img src={text11} alt="screenshot" className="screenshot" />
      </div>
      <p>You have no idea how hard you make me baby girl ❤️</p>
      <br></br>
      <h1>It is not just limited to texts.</h1>
      <h2>There's more</h2>
      <div className='image-container'>
        <img src={draw1} alt="screenshot" className="screenshot" />
        <img src={draw2} alt="screenshot" className="screenshot" />
        <img src={draw3} alt="screenshot" className="screenshot" />
        <img src={draw4} alt="screenshot" className="screenshot" />
      </div>
      <p>I can't wait for all this with you ❤️</p>
    </div>
  );
};

export default MessagesPage;
