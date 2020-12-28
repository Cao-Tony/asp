import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './ProductDetails.css';

function ProductDetails() {
    return (
        <Row className="main-row">
            <Col>
                <Row fluid>
                    <Col>
                        <p>Style: </p>
                     </Col>
                    <Col xs={7}>
                        <p>Fasion</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col>
                        <p>Brand Name: </p>
                   </Col>
                    <Col xs={7}>
                        <p>OEM</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col>
                        <p>Material: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Polyester</p>
                     </Col>
                </Row>
                <Row fluid>
                    <Col>
                        <p>Pattern Type: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Letter</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col>
                        <p>Closure Type: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Zipper</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col>
                        <p>Colors: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Customized Color</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col>
                        <p>Usage: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Daily Used</p>
                    </Col>
                </Row >
                <Row fluid>
                    <Col>
                        <p>Feature: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Durable</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col>
                        <p>Size: </p>
                    </Col>
                    <Col xs={7}>
                        <p>50*25*19cm</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col>
                        <p>Service: </p>
                    </Col>
                    <Col xs={7}>
                        <p>7*24 Hours Online Service</p>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row fluid>
                    <Col>
                        <p>Place of Origin: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Guangdong, China</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col>
                        <p>Model Number: </p>
                    </Col>
                    <Col xs={7}>
                        <p>TR01</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col >
                        <p>Drawbars: </p>
                    </Col>
                    <Col xs={7}>
                        <p>No</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col >
                        <p>Gender: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Unisex</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col >
                        <p>Product Name: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Pink Duffle Bag</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col >
                        <p>Logo: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Silkscreen, Embroider, Woven Labels, Stickiness, Others</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col >
                        <p>MOQ: </p>
                    </Col>
                    <Col xs={7}>
                        <p>1pcs</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col >
                        <p>Lead Time: </p>
                    </Col>
                    <Col xs={7}>
                        <p>3 Days With Small Order;7 Days With Normal;15 Days With Big Order</p>
                    </Col>
                </Row>
                <Row fluid>
                    <Col >
                        <p>Port: </p>
                    </Col>
                    <Col xs={7}>
                        <p>Shenzhen Port</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductDetails;
