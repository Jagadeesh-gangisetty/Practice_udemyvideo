import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
function Footer() {
  return (
    <>
    <div className='one'>
    <div className='two'>
        <div className='three'>CodeStella</div>
        <div className='fb'><FacebookIcon size={32}/></div>
        <div className='tw'><TwitterIcon size={32}/></div>
        <div className='In'><FaInstagram size={25} /></div>
        <div className='Li'><FaLinkedin size = {25}/></div>
    </div>
    <div className = 'four'></div>
    <div className='flex'>
    <div>
        <div className='com'>Company</div>
        <div className='h'>Home</div>
        <div className='Cu'>Contact Us</div>
        <div className='Au'>About Us</div>
        <div className='Gs'>Get Started</div>
    </div>
    <div>
        <div className='ser'>Services</div>
        <div className='Ad'>App design</div>
        <div className='Wb'>Web design</div>
        <div className='Ld'>Logo design</div>
        <div className='Bd'>Banner design</div>
    </div>
    <div>
         <div className='Acc'>Account</div>
         <div className='P'>Profile</div>
         <div className='Ma'>My account</div>
         <div className='Pr'>Preferences</div>
         <div className='Pu'>Purchase</div>
    </div>
    <div>
        <div className='Cou'>Courses</div>
        <div className='HC'>HTML & CSS</div>
        <div className='Js'>JavaScript</div>
        <div className='Pg'>Photography</div>
        <div className='Ps'>Photoshop</div>
    </div>
    <div>
        <div className='Sub'>Subscribe</div>
        <div><input type = "text" className='tf' placeholder = "Enter your email"></input></div>
        <div><button className='btn'>Subscribe</button></div>
    </div>
    </div>
    </div>
    <div className='bottom'>
        <div className='bottomone'>Copyright 2024 CodingStella</div>
        <div className='bottomtwo'>All rights reserved</div>
        <div className='bottomthree'>Privacy Policy</div>
        <div className='bottomfour'>Terms & Conditions</div>
    </div>
    </>
  )
}

export default Footer
