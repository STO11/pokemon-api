import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ScreenTop from '../components/screentop';
import ScreenDown from '../components/screendown';
import '../styles/style.css';

const Home = () => { 
    const [esta_logado, setLogado] = useState(0);

    return (
        
        <div class="container">
                {ScreenTop()}
                <div class="space-height"></div>
                {ScreenDown()}
        </div>
    );
}

export default Home;
