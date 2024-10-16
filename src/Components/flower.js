import React from 'react';
import './style.css';

const Rose = () => {
    return (
        <div className="rose">
            <div className="flower">
                <div className="petal"></div>
                <div className="petal"></div>
                <div className="petal"></div>
                <div className="petal"></div>
                <div className="petal"></div>
            </div>
            <div className="leaf">
                <div className="stem"></div>
                <div className="leafs"></div>
                <div className="leafs"></div>
            </div>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <center>
                <h1 style={{ color: '#D1123F', fontSize: '50px' }}>
                    For my Beautiful Ushna jee
                </h1>
            </center>
            <div className="container">
                <div className="letter">
                    <h1>Your smile is as beautiful as rose, I hope you can always smile.</h1>
                    <h1>I love you, more than anything in this entire world</h1>
                    <h1>I have made alot of mistakes, and I'm here to correct them</h1>
                    <h1>To make myself better for you</h1>
                    <h1>For us</h1>
                </div>
                
                {/* Render Rose components */}
                <Rose />
                <Rose />
            </div>
        </div>
    );
}

export default App;
