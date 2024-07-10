import React from 'react';
import '../services/Services.css';
import services from '../assests/clock.png';
import Footer from '../Footer/Footer';
function Services() {
    return (
        <>
            <div className='services'>
                <div className='contextLeft'>
                    <img src={services} className='image-clock' alt='Round-the-clock-support' />
                </div>
                <div className='contextRight'>
                    <h1>Our Services</h1>

                    {/* <p>Keep Your Medical Equipment Running Smoothly with Our 24/7 Guaranteed Support</p> */}

                    <p>We understand that downtime for your medical equipment is simply not an option. 
                        </p><p>That's why we offer a comprehensive suite of services designed to keep your devices operating at peak performance, 24 hours a day, 7 days a week.</p>
                </div>

            </div>

            {/* Here's what we offer:** */}
            <div>
                <div className="containerSection">
                    <div className='services-heading'>
                       <p> A Full Spectrum of Supplies:</p>
                    </div>
                    <div className='services-content'>
                        <p>From essential probes and cables to thermal paper and spare parts, we have everything you need to keep your medical equipment running smoothly. We carry a wide range of brands and models, ensuring you find the exact components you need.</p>
                    </div>
                </div>
                <div className="containerSection">
                    <div className='services-heading'>
                    <p>Expert Maintenance and Repair:</p>
                    </div>
                    <div className='services-content'>
                    <p>Our team of certified technicians provides comprehensive AMC and CMC services for all major medical equipment brands. We'll keep your devices in top condition, minimizing downtime and ensuring accuracy.</p>
                    </div>
                </div>
                <div className="containerSection">
                    <div className='services-heading'>
                    <p>Precision Calibration for Accuracy:</p>
                    </div>
                    <div className='services-content'>
                    <p>We offer calibration services for all types of medical equipment, ensuring your devices meet the highest standards of accuracy and reliability.</p>
                    </div>
                </div>
                <div className='services-heading'><p>Training for Your Team:</p>
                </div>
                <div className='services-content'> <p>We provide specialized training programs for biomedical engineers and students, equipping them with the knowledge and skills to maintain and troubleshoot medical equipment effectively.</p>

                </div>
                <div className='services-heading'><p>Laboratory Supplies at Your Fingertips:</p></div>
                <div className='services-content'> <p>We offer a wide range of laboratory reagents and consumables, ensuring you have everything you need for accurate and efficient testing.</p>
                </div> 

            </div>
            {/* <p>Partner with us and experience the peace of mind that comes with knowing your medical equipment is in expert hands.**

                **Contact us today to learn more about our services and how we can help you.</p>  */}

<Footer/>
        </>
    )
}

{/* <br/><br/> <p className='Designer'>Designed by <a href="https://www.linkedin.com/in/amirtha-k-63b089204/">Amirtha K</a></p> */ }


export default Services;
