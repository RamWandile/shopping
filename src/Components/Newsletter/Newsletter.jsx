import React from 'react'
import './Newsletter.css'
import { Link } from 'react-router-dom'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Enter your email' />
            <button><Link style={{textDecoration:'none',color:'white'}} to='/login'>Subscribe</Link></button>
        </div>
        </div>
  )
}
