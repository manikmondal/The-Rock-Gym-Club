import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/gym1.jpg';
import banner2 from '../../../images/banner/gym2.jpg';
import banner3 from '../../../images/banner/gym3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>STRENGTHEN YOUR HIPS ON THE TOTAL GYM USING THE LEG PULLEY ACCESSORY</h3>
                    <p>HIP MOBILITY TO PERFORM BETTER Your body is meant to have physical freedom and move in a wide range of motion. However, restrictions in movement, especially in the hip area, can significantly impact performance. These restrictions can be caused by many factors, including overuse, underuse, and improper…
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>LOOK AND FEEL HEALTHY WITH YOUR TOTAL GYM!</h3>
                    <p>These flexibility moves will have you fall in love with a flirty, fun, and feel-good flow on your Total Gym. A basic exercise routine will strengthen, lengthen, and tone your muscles,…</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>TRAIN THE MOVEMENT NOT THE EXERCISE</h3>
                    <p>
                        If your goal is to get toned, tight, and trim while building a beautiful booty, then these Pilates based exercises using your leg pulley accessory will help do the trick. But wait, theres more… they will also help improve hip mobility, stability, flexibility, and enhance your daily movements, something…
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;