import React from 'react';
import ScreenTop from '../components/screentop';
import ScreenDown from '../components/screendown';
import '../styles/style.css';

function Home() {
    return (
        <div class="container">
                {ScreenTop}
                <div class="space-height"></div>
                {ScreenDown}
        </div>
    );
}

export default Home();