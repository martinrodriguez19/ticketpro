import React from 'react';
import {FiFacebook,FiTwitter,FiInstagram}from 'react-icons/fi'
import {FooterOverlay,Newsletter} from '../../components';
import './Footer.css';
import {images} from '../../constants';
const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Buenos Aires, Argentina</p>
        <p className='p__opensans'>+54 9 11 3927-3345</p>
        <p className='p__opensans'>+54 9 11 3927-3345</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.ticketpro} alt='footer_logo' />
        <p className='p__opensans'>"Frase"</p>
        <img src={images.ticketpro} alt='spoon' className='spoon__img' style={{marginTop:15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Lorem</h1>
        <p className='p__opensans'>Lorem:</p>
        <p className='p__opensans'>Lorem ipsum </p>
        <p className='p__opensans'>Lorem:</p>
        <p className='p__opensans'>Lorem ipsum </p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Ticketpro. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
