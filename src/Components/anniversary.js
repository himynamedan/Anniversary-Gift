import React from 'react';
import './anniversary.css';  // Import the CSS for styling

const AnniversaryPage = () => {
  return (
    <div className="anniversary-container">
      <h1>Happy 3rd Anniversary, My Love! 💖</h1>
      <p>
        It’s been an incredible journey with you by my side, and I feel so lucky to have you. 
        Every moment we've shared has been a blessing, and I can’t wait to create even more memories with you. 
        Here’s to us and the beautiful love we’ve nurtured over the last 3 years. I love you more with every passing day. 🌸💐
      </p>
      <div className="heart-container">
        {/* Add flowers and hearts */}
        <span className="heart">💖</span>
        <span className="heart">🌸</span>
        <span className="heart">💐</span>
        <span className="heart">❤️</span>
        <span className="heart">🌹</span>
      </div>
      <div class="big-heart"></div>
    </div>
  );
};

export default AnniversaryPage;
