
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found'>
      <div>
        <h1>Oops! The page you're looking for isn't here.</h1>
        <p>You might have the wrong address...</p>
        <Link to='/' className='not-link'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          BACK TO HOMEPAGE
        </Link>
      </div>
      <div>
        <img
          src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
          alt=''
        />
      </div>
    </div>

  )
}

export default NotFound
