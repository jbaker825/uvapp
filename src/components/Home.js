import React from 'react';
import BackgroundImage from '../images/1.jpg'

const Home = () => {
    return (
        <div className="home-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            hello
        </div>
    );
};

export default Home;