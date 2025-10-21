import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MainCarousel() {
    return (

        <Carousel>
            <Carousel.Item>
                <img src='/assets/images/8.png' style={{ width: '100%' }}></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src='/assets/images/5.png' style={{ width: '100%' }}></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src='/assets/images/4.png' style={{ width: '100%' }}></img>
            </Carousel.Item>
        </Carousel>
    );
}

export default MainCarousel;