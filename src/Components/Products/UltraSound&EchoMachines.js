import React from 'react';
import './UltraSound&EchoMachines.css';
import Footer from '../Footer/Footer';
import MX7 from '../assests/MX7.pdf';
import ConsonaN6 from '../assests/Consona-N6.pdf';
import M6 from '../assests/M6_HandCarried_UltraSound_System.pdf';
import ConsonaN7 from '../assests/Consona_N7_Diagnosis_Ultrasound_System.pdf';
function UltraSound() {

    return (
        <>
            <div className="UltraSound">
                <div className="UltraSound_Details"> <h2>MX7</h2>
                    MX7 enables precise diagnostics through the leading-edge ZST+ platform, while enhancing workflow efficiency with a fully customizable touchscreen. Its ultra-lightweight main unit and extended 8-hour battery life allow for use in any mobile clinical setting. Additionally, advanced features and analytical tools can seamlessly integrate into your everyday practices.
                    <p><button className='Downloadbrochure'><a href={MX7} download>Download MX7 Brochure</a></button></p>
                </div>

                <div className="Document">
                    <iframe alt='MX7' src={MX7} width='100%' height='500px' />
                </div>
            </div>


            <div className="UltraSound">
                <div className="UltraSound_Details"> <h2>Consona N6</h2>
                    The ZST+ platform stands as a remarkable advancement in the field of ultrasound technology. It signifies a shift from traditional beam-forming techniques to a processing method that utilizes channel data. This innovation effectively addresses the conventional trade-offs associated with spatial resolution, temporal resolution, and tissue uniformity, resulting in outstanding image quality that supports limitless imaging applications and continuous enhancements.
                    <p><button className='Downloadbrochure'><a href={ConsonaN6} download>Download Consona N6 Brochure</a></button></p>
                </div>

                <div className="Document">
                    <iframe alt='ConsonaN6' src={ConsonaN6} width='100%' height='500px' />
                </div>
            </div>



            <div className="UltraSound">
                <div className="UltraSound_Details"> <h2>M6</h2>
                    The journey for clinicians to deliver high-quality diagnostic standards at the bedside for intensive patient care has been lengthy and fraught with challenges. Until now, traditional ultrasound systems have offered limited options in terms of size and performance. With the goal of making healthcare more accessible, Mindray has introduced the new M6, which strikes an optimal balance between capability and size, enabling confident diagnoses at the bedside.
                    <p><button  className='Downloadbrochure'><a href={M6} download>Download M6 Brochure</a></button></p>
               
                </div>

                <div className="Document">
                    <iframe alt='M6' src={M6} width='100%' height='500px' />
                </div>
            </div> <div className="UltraSound">

                <div className="UltraSound_Details"> <h2>Consona N7</h2>
                    The ZST+ platform is an extraordinary innovation, representing an ultrasound evolution. Transforming ultrasound metrics from conventional beam-forming to channel data based processing. It overcomes the traditional trade-off limitation among spatial resolution, temporal resolution and tissue uniformity, delivering exceptional image quality for infinite imaging solutions with non-stop improvements.
                    <p><button  className='Downloadbrochure'><a href={ConsonaN7} download>Download Consona N7 Brochure</a></button></p>
                </div>

                <div className="Document">
                    <iframe alt='ConsonaN7' src={ConsonaN7} width='100%' height='500px' />
                </div>
            </div>
            <Footer />
        </>
    );

}



export default UltraSound;
