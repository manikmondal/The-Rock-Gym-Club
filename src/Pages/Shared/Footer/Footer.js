import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        // <footer className='text-center mt-5 bg-dark h-100vh'>
        <footer className='Footer-con'>
            <p><small>Manik Lal Mondol, &copy;: {year}  All Rights
                Reserved. </small></p>
            <p><small>(:- THE ROCK GYM CLUB - Assessment-10 -:)</small></p>
        </footer>
    );
};

export default Footer;