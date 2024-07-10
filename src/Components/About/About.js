import './About.css';
import React from 'react';
import Footer from '../Footer/Footer'

function About() {
  return (
    <>
      <div className='container'>
        <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310"><path fill="#fff" fill-opacity="1" d="M0,192L40,202.7C80,213,160,235,240,224C320,213,400,171,480,154.7C560,139,640,149,720,170.7C800,192,880,224,960,202.7C1040,181,1120,107,1200,80C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <center><h1>Meet Mr. Danakotti</h1> </center>
        {/* </div>
        <div  className='container'> */}
        <p>
          <span className='bold' >Alpha Technologies, </span>Led by<span className='bold'> Danakotti C, </span>
          is a medical equipment sales and services company that has been in operation since 2013. We specialize in providing high-quality medical equipment to healthcare facilities in Tamil Nadu, Andhra Pradesh, Karnataka, and Telangana. With over <strong className='secondbold'>2.2K+ installations </strong>and more than <strong className='secondbold'>2000 happy customers</strong>, we have established ourselves as a trusted provider in the industry. Our major customers include Ishwarya Fertility, ARC Fertility, CMC Vellore, and Scansworld.
        </p>
        <p>At Alpha Technologies, we have a dedicated team of professionals who are passionate about providing top-quality medical equipment and services, working tirelessly to ensure the success of our customers and the growth of our company.
        </p>
        <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fill-opacity="1" d="M0,192L40,202.7C80,213,160,235,240,224C320,213,400,171,480,154.7C560,139,640,149,720,170.7C800,192,880,224,960,202.7C1040,181,1120,107,1200,80C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      </div>


      <h2><center>
        Core Values
      </center> </h2>
      <div className='coreValues'>
        <div className='valuesBox'>
          <h3>Mission</h3>
          <p>Our mission at Alpha Technologies is to provide top-notch medical equipment and services to healthcare facilities, ensuring the best possible patient care and outcomes.
          </p>
        </div>
        <div className='valuesBox'><h3>Vision</h3>
          <p>Our vision is to become the leading provider of medical equipment in the region, known for our exceptional quality, reliability, and customer service.
          </p>
        </div>
        <div className='valuesBox'><h3> Bias Toward Action</h3>
          <p>We know speed matters in business, so we embrace quick and collaborative risk-taking. Many actions are reversible, so we remain solution-oriented even when facing obstacles and challenges.
          </p>
        </div>
        <div className='valuesBox'>
          <h3> Customer Satisfaction</h3><p>We are committed to exceeding our customers' expectations and ensuring their satisfaction with our products and services.
          </p>
        </div>
        <div className='valuesBox'>
          <h3> Excellence </h3>
          <p>We strive for excellence in everything we do, from the products we offer to the services we provide.
          </p>
        </div>
        <div className='valuesBox'>
          <h3>Integrity</h3> <p>We conduct our business with the highest level of integrity and honesty, building trust with our customers and partners.
          </p>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
