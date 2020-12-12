import React from 'react';
import ScreenTop from '../components/screentop';
import ScreenDown from '../components/screendown';
import '../styles/style.css';
const Home = () => { 
    return (
        <div class="container">
                {ScreenTop()}
                <div class="space-height"></div>
                {ScreenDown()}
        </div>
    );
}

export default Home;
