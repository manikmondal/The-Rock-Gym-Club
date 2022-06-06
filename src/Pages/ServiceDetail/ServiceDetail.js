import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center'>Welcome To Our Gym Detail: {serviceId}</h2>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary mt-5'>Proceed Checkout</button>
                </Link>
            </div>
            <div className='mt-5'>
                <Link to='/' className='not-link'>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    BACK TO HOMEPAGE
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;