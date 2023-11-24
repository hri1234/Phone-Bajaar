import React from 'react';
import './styles.css';

const StyledComponent = () => {
 return (
    <div className="wrapper">
      <a className="social" href="http://wa.me/9679472685"><i className="fa fa-whatsapp" style={{ fontSize: '30px !important;' }}></i></a>
      <a className="social" href="9679472685"><i className="fa-solid fa-phone-volume" style={{ fontSize: '20px !important;' }}></i></a>
      <a className="close-button" href="#"><i className="fa-sharp fa-solid fa-house" style={{ fontSize: '30px !important;' }}></i></a>
    </div>
 );
};

export default StyledComponent;