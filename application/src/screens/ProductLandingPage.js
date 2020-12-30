import React from 'react';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.svg';

import MainNavBar from '../components/MainNavBar';
import SubNavBar from '../components/SubNavBar';
import Product from '../components/Product';

import './ProductLandingPage.css'

function ProductLandingPage() {
    return (
        <div className="main">
            <SubNavBar />
            <Image src={logo} className="image"/>
            <MainNavBar route={'/products'}/>
            <Product ratings={4.5} reviews={153} buyers={308} price={50.45}/>
        </div>
    )
}

export default ProductLandingPage;
