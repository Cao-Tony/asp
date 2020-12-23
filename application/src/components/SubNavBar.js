import React from 'react';
import Nav from 'react-bootstrap/Nav';

import './SubNavBar.css';

function SubNavBar() {
    let signedIn = false; 
    let userName = 'Tony';

    return (
        <div>
             <Nav className="justify-content-end">
                {signedIn ? 
                    <Nav.Item>
                        <Nav.Link href="/signin" className="text">Hello, {userName}</Nav.Link>
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
