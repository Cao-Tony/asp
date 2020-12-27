import React, {
    useState 
} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Rating from '@material-ui/lab/Rating';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import pinkpink from '../assets/pinkBagPhotos/pinkpink.jpg';
import blackpink from '../assets/pinkBagPhotos/blackpink.jpg';
import bluepink from '../assets/pinkBagPhotos/bluepink.jpg';
import graypink from '../assets/pinkBagPhotos/graypink.jpg';
import handholdbag from '../assets/pinkBagPhotos/handholdbag.jpg';
import shoulderholdbag from '../assets/pinkBagPhotos/shoulderholdbag.jpg';

import './Product.css';

function Product({ratings, reviews, buyers}) {
    const [index, setIndex] = useState(0);
    const [key, setKey] = useState(0);
    const productPhotos = [pinkpink, blackpink, bluepink, graypink, handholdbag, shoulderholdbag];

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  
    return (
        <Container fluid style={{padding: '15px 0 0 0'}}>
            <Row>
                <Col/>
                <Col xs={7}>
                   <Row>
                       <Col />
                       <Col xs={6} className="main-col">
                            <Carousel activeIndex={index} onSelect={handleSelect} className="Carousel">
                                {
                                    productPhotos.map(photo => 
                                        <Carousel.Item >
                                            <img
                                                className="d-block w-100"
                                                src={photo}
                                                alt={photo.index}
                                            />
                                        </Carousel.Item>    
                                    )
                                }
                            </Carousel>
                            <Row fluid>
                                <Col sm={9} className="product-headings">Pink Duffle Bag</Col>
                                <Col className="product-headings product-prize">$00.00</Col>
                            </Row>
                            <Row fluid>
                                <Col className="rating-container">
                                    <Rating className="rating-stars" name="half-rating-read" defaultValue={ratings} precision={0.5} readOnly size="large"/>
                                    <h6 className="rating-numbers">{ratings}</h6>
                                </Col>
                                <Col>
                                    <Button size="sm" className="buynow-button" variant="outline-primary">BUY NOW</Button>
                                </Col>
                            </Row>
                            <Row fluid>
                                <Col className="review-buyers-container">
                                    <h6><a href='#' className="reviews">{reviews} reviews</a></h6>
                                    <h6><a href='#' className="buyers">{buyers} buyers</a></h6>
                                </Col>
                                <Col>
                                    <Button size="sm" className="add2cart-button" variant="outline-primary">ADD TO CART</Button>
                                </Col>
                            </Row>
                       </Col>
                       <Col />
                   </Row>
                </Col>
                <Col/>
            </Row>
            <Row>
                <Col/>
                    <Col xs={7}>
                        <Row>
                            <Col />
                            <Col xs={6} className="main-col" style={{backgroundColor: 'red'}}>
                                <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                >
                                <Tab eventKey="Product Details" title="Product Details">
                                </Tab>
                                <Tab eventKey="Transactions" title="Transactions">
                                </Tab>
                                <Tab eventKey="Reviews" title="Reviews">
                                </Tab>
                                </Tabs>
                            </Col>
                            <Col />
                        </Row>
                    </Col>
                <Col/>
            </Row>
        </Container>
    );
}

export default Product;
