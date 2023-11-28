import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Logo from './assets/logo.svg'

function Home() {
    return (
        <div className='container'>
            <Link to="/habits" className="app">
                <img src={Logo} alt="Logo" className="logo" />
            </Link>
        </div>
    );
}

export default Home;