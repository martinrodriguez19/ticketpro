import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.ticketpro} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, cumque! Minima vero ipsum illum praesentium? Optio ullam sit eligendi praesentium repellendus soluta, laboriosam quas dignissimos quam illum. Labore, numquam error!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.ticketpro} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, cumque! Minima vero ipsum illum praesentium? Optio ullam sit eligendi praesentium repellendus soluta, laboriosam quas dignissimos quam illum. Labore, numquam error!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
