import React from 'react';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.svg';

import MainNavBar from '../components/MainNavBar';
import SubNavBar from '../components/SubNavBar';

import './HomePage.css';

function HomePage() {
    return (
        <div className="main">
            <SubNavBar />
            <Image src={logo} className="image"/>
            <MainNavBar route={'/'}/>
        </div>
    )
}

export default HomePage;
