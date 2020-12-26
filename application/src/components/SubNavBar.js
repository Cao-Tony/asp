import React from 'react';
import Nav from 'react-bootstrap/Nav';

import AuthAPI from '../utils/AuthAPI';

import './SubNavBar.css';

function SubNavBar() {
    const authApi = React.useContext(AuthAPI); 
    let userName = 'Tony';

    return (
        <div>
             <Nav className="justify-content-end">
                {authApi.auth ? 
                    <Nav.Item>
                        <Nav.Link href="/dashboard" className="text">Hello, {userName}</Nav.Link>
                    </Nav.Item>
                    :
                    <Nav.Item>
                        <Nav.Link href="/signin" className="text">Sign In</Nav.Link>
                    </Nav.Item>
                }
                <Nav.Item>
                    <Nav.Link href="/returns-and-orders" className="text">Returns & Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/cart" className="text">Cart</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default SubNavBar
