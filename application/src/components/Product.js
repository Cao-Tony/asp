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
import axios from 'axios';

import photo1 from '../assets/babySafetyLock/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_ (1).webp';
import photo2 from '../assets/babySafetyLock/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_ (2).webp';
import photo3 from '../assets/babySafetyLock/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_ (3).webp';
import photo4 from '../assets/babySafetyLock/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_ (4).webp';
import photo5 from '../assets/babySafetyLock/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_ (5).webp';
import photo6 from '../assets/babySafetyLock/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_.webp';

import ProductDetails from './ProductDetails';

import './Product.css';

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51I3j7iLUIpzEoCsjmrqSKfmLUAox319vLKiMTE4NS57gilobGFuNLIRaeipC4C5vcMGd87d7TttLBfgxK73QsiTr00VZpoKV88");

// photo6
const link6 =  'https://ae01.alicdn.com/kf/H70511a112d924cc6965069835247824e7/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_.webp';

// photo1
const link1 = 'https://ae01.alicdn.com/kf/H58125db1c1d445b19bd0639d3b74fc5c5/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_.webp';

// photo2
const link2 = 'https://ae01.alicdn.com/kf/Hee3cb749ca86436fa391ef8cf4c33936H/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_.webp';

// photo3
const link3 = 'https://ae01.alicdn.com/kf/Ha1c7b35cab754fcb96e8c50746d08e001/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_.webp';

// photo4
const link4 = 'https://ae01.alicdn.com/kf/H2d55c38d10304e79b705bca229c0e792A/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_.webp';

// photo5
const link5 = 'https://ae01.alicdn.com/kf/H0e63dcf81e444539a4970f7bc9cdeb92g/QWZ-New-Baby-Safety-Lock-Children-Cabinet-Drawer-Door-Fridge-Blockers-Lock-For-Kids-Protection-Cover.jpg_Q90.jpg_.webp';

// video
// https://ae-cn.alicdn.com/9f8e1de30350cb41/qlJqiQXbcpMVl6SDk8p/riEFEl8chK8C7KCPIjH_273638269573_hd_hq.mp4

// product aliexpress link
// https://www.aliexpress.com/item/1005001265440425.html?spm=a2g0o.productlist.0.0.29272dcbOUAPcn&algo_pvid=2b5e5561-cdb4-43c5-9024-7846497d2544&algo_expid=2b5e5561-cdb4-43c5-9024-7846497d2544-35&btsid=0b0a555c16093365149694301e7d48&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_

function Product({ratings, reviews, buyers, price}) {
    const [index, setIndex] = useState(0);
    const [key, setKey] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const productPhotos = [photo5, photo1, photo2, photo3, photo4, photo6];
    const productPhotoLinks = [link5, link1, link2, link3, link4, link6];
    const product_name = 'Pink Duffle Bag';

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleBuyNow = async () => {
        const stripe = await stripePromise;

        const product_info = {
            name: product_name,
            images: productPhotoLinks,
            price, 
            quantity,
        };

        const response = await axios.post("/payment/charge-session", product_info);
        const session = response.data;

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            alert(result.error.message);
        }
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
                                <Col sm={9} className="product-headings">{product_name}</Col>
                                <Col className="product-headings product-prize">${Number.isInteger(price) ? price + '.00' : price}</Col>
                            </Row>
                            <Row fluid>
                                <Col className="rating-container">
                                    <Rating className="rating-stars" name="half-rating-read" defaultValue={ratings} precision={0.5} readOnly size="large"/>
                                    <h6 className="rating-numbers">{ratings}</h6>
                                </Col>
                                <Col>
                                    <Button size="sm" className="buynow-button" variant="outline-primary" onClick={handleBuyNow}>BUY NOW</Button>
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
                        <Row className="tab-menu">
                            <Col />
                            <Col xs={6} className="main-col">
                                <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                >
                                <Tab eventKey="Product Details" title="Product Details">
                                    <ProductDetails />
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
