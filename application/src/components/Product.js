import React, {
    useState 
} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Rating from '@material-ui/lab/Rating';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import pinkpink from '../assets/pinkBagPhotos/pinkpink.jpg';
import blackpink from '../assets/pinkBagPhotos/blackpink.jpg';
import bluepink from '../assets/pinkBagPhotos/bluepink.jpg';
import graypink from '../assets/pinkBagPhotos/graypink.jpg';
import handholdbag from '../assets/pinkBagPhotos/handholdbag.jpg';
import shoulderholdbag from '../assets/pinkBagPhotos/shoulderholdbag.jpg';

import './Product.css';

function Product({ratings, reviews, buyers}) {
    const [index, setIndex] = useState(0);
    const productPhotos = [pinkpink, blackpink, bluepink, graypink, handholdbag, shoulderholdbag];

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} className="carousal-container">
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
            <div className="product-name-N-price-container">
                <h4 className="product-name">Pink Duffle Bag</h4>
                <h4>$00.00</h4>
            </div>
            <div className="rating-container">
                <Col className="rating-container" >
                    <Rating className="rating-stars" name="half-rating-read" defaultValue={ratings} precision={0.5} readOnly />
                    <h6>{ratings}</h6>
                </Col>
                <Button variant="outline-primary">BUY NOW</Button>{' '}
            </div>
            <div className="rating-container">
                <Col>
                    <h6><a href='#'>{reviews} reviews</a></h6>
                    <h6><a href='#'>{buyers} buyers</a></h6>
                </Col>
                <Button variant="outline-primary">ADD TO CART</Button>{' '}
            </div>
        </div>
    );
}

export default Product;
