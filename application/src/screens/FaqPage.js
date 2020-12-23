import React from 'react';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.svg';

import MainNavBar from '../components/MainNavBar';
import SubNavBar from '../components/SubNavBar';

function FaqPage() {
    return (
        <div>
            <SubNavBar />
            <Image src={logo} className="image"/>
            <MainNavBar route={'/faq'}/>
        </div>
    )
}

export default FaqPage
