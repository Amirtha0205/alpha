import React from 'react';

import './OTEquipments.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer';

function POCTProducts() {
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
            <img data-aos="fade-left" alt='Blood Gas Analyzer' />
          </div>
          <div class="product-details">
            <h3>Blood Gas Analyzer</h3>
            <h4>ST-200 CC</h4>
            <p><li>        10" LCD Touch Screen        </li>
              <li>       1 Sample and acquire 27 different results        </li>
              <li>       One touch calibration for new reagent pack       </li>
              <li>       1,00,000 samples storage.     </li></p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Urine Analyzer' />
          </div>
          <div class="product-details">
           
            <h3>Urine Analyzer</h3>
            <p> <li>    LCD screen display</li>
              <li>     Throughput 60 samples per/hr   </li>
              <li>   Sample supply - manual dipping</li>
              <li>     Storage - 5000 results  </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='Electrolyte Analyzer' />
          </div>
          <div class="product-details">
            <h3>AFT 800</h3>
            <h3> Electrolyte Analyzer</h3>
            <p> <li>        7" Touch screen display     </li>
              <li>       Sample volume: 65 μl - 150 μl    </li>   <li>   Automation one point, two points and manual calibration    </li>
              <li>       Rapid test speed: &lt;25 seconds  </li>
              <li>      Parameters: Na<sup>+</sup>, K<sup>+</sup>,Cl<sup>-</sup>, Ca<sup>++</sup>, pH    </li>

            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Optical Coagulation Analyzer' />
          </div>
          <div class="product-details">
            <h3> Optical Coagulation Analyzer</h3>
            <p> <li>      Results in 3 minutes.   </li>
              <li>    Accurate CV - 5%  </li>   <li>      Dried reagents test trip</li>
              <li>       Parameters - PT/INR, APTT, FIB, TT etc.</li>
              <li>     Sample volume - 20μl     </li>
            </p>
          </div>
        </div>
      
      </div>
      <Footer/>
    </>
  );

}



export default POCTProducts;
