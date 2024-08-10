import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyChooseUs.css';
import { useEffect } from "react";
import React from 'react';
import Media from '../assests/Media.jpg';
import Brochure from '../assests/AlphaTechnologies_Brochure.pdf'
import Download from '../assests/Download.png'
function WhyChooseUs() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="WhyChooseUs">
                <div className="WhyChooseUsLeft">
                    <h2><b>Why Choose Us ?</b></h2>
                    <p className='WhyChooseUs-Details'>
                        Our team possesses over a decade of collective experience in the sales and servicing of medical equipment. For the past ten years, we have earned the trust of healthcare professionals. We collaborate with top manufacturers to provide you with the best and finest medical equipment and have a dedicated customer service team. </p>
                       <p><button  className='Downloadbrochure'><a href={Brochure} download>Download Brochure</a></button></p>                  
                </div>
                <div className="ChooseUsImage"><img alt='Save lives' src={Media} />
                </div>
            </div>



        </>
    );
}

export default WhyChooseUs;