import React from 'react';
import Nav from 'react-bootstrap/Nav';

import './MainNavBar.css';

function MainNavBar({route}) {
    return (
        <div>
            <Nav className="justify-content-center" variant="tabs" defaultActiveKey={route}>
                <Nav.Item className="far-left-item">
                    <Nav.Link href="/" className="text">HOME</Nav.Link>
                </Nav.Item>
                <Nav.Item className="middle-items">
                    <Nav.Link href="/products" className="text">PRODUCTS</Nav.Link>
                </Nav.Item>
                <Nav.Item className="middle-items">
                    <Nav.Link href="/prizes" className="text">WINNERS</Nav.Link>
                </Nav.Item>
                <Nav.Item className="far-right-item">
                    <Nav.Link href="/faq" className="text">FAQ</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default MainNavBar;
