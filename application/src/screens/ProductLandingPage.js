import React from 'react';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.svg';

import MainNavBar from '../components/MainNavBar';
import SubNavBar from '../components/SubNavBar';

function ProductLandingPage() {
    return (
        <div>
            <SubNavBar />
            <Image src={logo} className="image"/>
            <MainNavBar route={'/products'}/>
        </div>
    )
}

export default ProductLandingPage;
