import AOS from 'aos';
import 'aos/dist/aos.css';
import './Icons.css';
import {useEffect }from "react";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faHeadset, faHandHoldingDollar, faHourglassHalf, faReplyAll } from '@fortawesome/free-solid-svg-icons';

function Icons() {
  //AOS.init();

  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <>
      <div className="icons">
        <div className="icons-details">
          <p data-aos="fade-right" className='icon-font'>2,200+</p>
          <p className='icon-text'>Equipments Delivered</p>
        </div>
        <div className="icons-details">
          <p data-aos="fade-up" className='icon-font'>98%</p>
          <p className='icon-text'>Customer Retention</p>
        </div>
        <div className="icons-details">
          <p data-aos="fade-left" className='icon-font'>100%</p>
          <p className='icon-text'>Trust</p>
        </div>
      </div>
      <div className="icons">
        <div className="icons-details">
          <p data-aos="fade-right" className='icon-font'><FontAwesomeIcon icon={faShippingFast} /></p>
          <p className='icon-text'>Fast Delivery Model</p>
        </div>
        <div className="icons-details">
          <p data-aos="fade-right" className='icon-font'><FontAwesomeIcon icon={faHourglassHalf} /></p>
          <p className='icon-text'>Timely Response</p>
        </div>
        <div className="icons-details">
          <p data-aos="fade-up" className='icon-font'><FontAwesomeIcon icon={faReplyAll} /></p>
          <p className='icon-text'>Clear Yes/No Answers</p>
        </div>
        <div className="icons-details">
          <p data-aos="fade-left" className='icon-font'><FontAwesomeIcon icon={faHeadset} /></p>
          <p className='icon-text'>After sales support</p>
        </div>
        <div className="icons-details">
          <p data-aos="fade-left" className='icon-font'><FontAwesomeIcon icon={faHandHoldingDollar} /></p>
          <p className='icon-text'>Competitive pricing</p>
        </div>
      </div>


    </>
  );
}

export default Icons;