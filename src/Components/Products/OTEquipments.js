import React from 'react';
import LedOTLight from '../assests/LedOTLight.jpg';
import OTtable from '../assests/OTtable.jpg';
import boylesapparatus from '../assests/boylesApparatus.png'
import surgical from '../assests/surgical-diathermy.png'
import ExaminationLight from '../assests/ExaminationLight.png';
import Colposcopy from '../assests/Colposcopy.png';
import AutoClave from '../assests/AutoClave.png'

import './OTEquipments.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer';

function OTEquipments() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  //AOS.init();
  return (
    <>
      <div className="product-grid">
        <div className="product-item">
          <div className="product-image">
            <img data-aos="fade-left" src={LedOTLight} alt='Led-OT-Light' />
          </div>
          <div class="product-details">
            <h3>Led OT Light</h3>
            <p><li>        1,80,000+1,80,000 Lux intensity (90+90 LED)        </li>
              <li>        Wireless remote control        </li>
              <li>        Dual Suspension spring SS arm system        </li>
              <li>        3 years warranty        </li></p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" src={OTtable} alt='OT-Table' />
          </div>
          <div class="product-details">
            <h3>Operation Theater Table</h3>
            <p> <li>        Fully stainless steel design with C-arm compatible        </li>
              <li>        Manual/Electrical operated        </li>
              <li>        Multipurpose operating table        </li>
              <li>        3 years warranty        </li>
              <li>        Radiolucent top that allows for X-ray imaging      </li>
              <li>        Adjustable height for optimal positioning of the patient        </li></p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" src={boylesapparatus} alt='boyles-Apparatus' />
          </div>
          <div class="product-details">
            <h3>Boyles Apparatus</h3>
            <p> <li>        SS/MS Design with circle absorber      </li>
              <li>        A` type / B` type cylinder provisions        </li>
              <li>        All safety cut off systems        </li>
              <li>        Optional : Vaporizer, Anesthesia Ventilator       </li></p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" src={surgical} alt='Surgical Diathermy' />
          </div>
          <div class="product-details">
            <h3>Surgical Diathermy</h3>
            <p> <li>        Suitable for all surgeries        </li>
              <li>        Monopolar - cut blend/coagulation       </li>
              <li>        Bipolar coagulation        </li>
              <li>        Upto 99 procedures programmable   </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" src={ExaminationLight} alt='Examination Light' />
          </div>
          <div class="product-details">
            <h3>Examination Light</h3>
            <p> <li>        1,60,000 LUX(76 LED)       </li>
              <li>        3 Years Warranty      </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" src={Colposcopy} alt='Colposcopy' />
          </div>
          <div class="product-details">
            <h3>Colposcopy</h3>
            <p> <li>        Auto/Manual focus     </li>
              <li>       Maintanence free light source    </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" src={AutoClave} alt='Auto Clave' />
          </div>
          <div class="product-details">
            <h3>Auto Clave</h3>
            <p> <li>        1,60,000 LUX(76 LED)       </li>
              <li>        3 Years Warranty      </li>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );

}
{/* 
     
      <div className='OT-Equipments'>
        <div className='Led-OT-Light'><img src={boylesApparatus} alt='boylesApparatus' /></div>
        <div className='Led-OT-Light-Description'>
          
        </div>
      </div>
      <div className='rightSide'>
        <div className='rightImage'><img src={surgical} alt='OT-Table' /></div>
        <div className='rightDescription'>
          <li>        Fully stainless steel design with C-arm compatible        </li>
          <li>        Manual/Electrical operated        </li>
          <li>        Multipurpose operating table        </li>
          <li>        3 years warranty        </li>
          <li>        Radiolucent top that allows for X-ray imaging      </li>
          <li>        Adjustable height for optimal positioning of the patient        </li>
        </div>
      </div> */}



export default OTEquipments;
