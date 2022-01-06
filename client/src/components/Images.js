import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';
import Hydrant from '../img/hydrant.jpg';
import Fighters from '../img/firefighters.jpg';
import Station from '../img/station.jpg';

const Images = () => {
    return (
        <Carousel>
            <Carousel.Item className='carousel-item'>
                <img className='d-block w-100 h-100 pic1' 
                src={Hydrant} 
                alt='A fire hydrant'
                />
                <Carousel.Caption>
                    <h3>First Slide Label</h3>
                    <p>Here is a picture of a fire hydrant.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='carousel-item'>
                <img className='d-block w-100 h-100 pic2' 
                src={Fighters} 
                alt='Two firefighters fighting flames'
                />
                <Carousel.Caption>
                    <h3>Second Slide Label</h3>
                    <p>Here is a picture of something else.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='carousel-item'>
                <img className='d-block w-100 h-100 pic3' 
                src={Station} 
                alt='The fire hall'
                />
                <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Here is a picture of our fire hall.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Images;