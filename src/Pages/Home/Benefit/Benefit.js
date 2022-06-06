import React from 'react';
import './Benefit.css'
import gyms from '../../../images/gyms-ani.jpg';

const Benefit = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>The Rock Gym Club Benefit </h1>
            <div className='benefit-text'>
                <div className='benefit'>
                    <h1 className='text-primary text-center mt-2'>BENEFIT</h1>

                    <h5 className='m-3'>A gym session or brisk walk can help. Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed and less anxious. You may also feel better about your appearance and yourself when you exercise regularly, which can boost your confidence and improve your self-esteem.Exercise strengthens your heart and improves your circulation. The increased blood flow raises the oxygen levels in your body. </h5>
                </div>
                <div className='benefit'>
                    <img className="d-block w-100" src={gyms} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Benefit;