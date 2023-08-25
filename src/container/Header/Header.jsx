import React from 'react';
import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Eventos" />
      <h1 className='app__header-h1'>venta  compra / eventos</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Estamos comprometidos en hacer que la planificación y ejecución de tus eventos sean más sencillos y exitosos que nunca.</p>
      <button type='button' className='custom__button'>Crear Evento</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.party} alt='Header Img' />
    </div>
  </div>
);

export default Header;
