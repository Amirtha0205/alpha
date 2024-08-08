import React from 'react';


import './OTEquipments.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer';

function CardiologyEquipments() {
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
            <img data-aos="fade-left"  alt='Cardiac Treadmill' />
          </div>
          <div class="product-details">
            <h3>Cardiac Treadmill</h3>
            <p><li>        Fully Computerized Treadmill with software       </li>
              <li>       Automatic speed and elevation      </li>
              <li>        12 Channel ECG Analyzer for TMT & Resting ECG      </li>
             </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right"  alt='3/12 ECG Holter' />
          </div>
          <div class="product-details">
            <h3>3/12 ECG Holter</h3>
            <p> <li>       2 GB SD Memory Card & USB       </li>
              <li>       5 or 7 Lead ECG Patient cable </li>
              <li>       Recording Time: 24/48/72 hr      </li>
              <li>      Battery Type: AA Battery      </li>
             </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left"  alt='Ambulatory Blood Pressure Recorder' />
          </div>
          <div class="product-details">
            <h3>ABP</h3>
            <h3>Ambulatory Blood Pressure Recorder</h3>
            <p> <li>        Recording Time: 24 hr          </li>
              <li>       Data Transfer Wireless Infra Red       </li>
              <li>      Accuracy &lt; 3mm Hg  </li>
              <li>        Method : Oscillometric       </li></p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right"  alt='Biphasic Defibrillator' />
          </div>
          <div class="product-details">
            <h3>Biphasic Defibrillator</h3>
            <p> <li>      Jules 2 to 200       </li>
              <li>       7" Screen Color Display      </li>
              <li>        Charging Time 6 Seconds    </li>
              <li>        Optional: SpO2, NIBP, AED, PACER, EtCO2   </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left"  alt='CPAP/BPAP' />
          </div>
          <div class="product-details">
            <h3>CPAP/BPAP</h3>
            <p> <li>        High Efficiency Humidification      </li>
              <li>       Higher Motor Performance </li>
              <li>       Maximum Ramp: 0 to 60 min.      </li>
              <li>       Weight: 1.5 kg    </li>
                      
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right"  alt='Infusion Pump' />
          </div>
          <div class="product-details">
            <h3>Infusion Pump</h3>
            <p> <li>      LCD Display   </li>
              <li>       4 Hour Battery   </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left"  alt='O2 Concentrator' />
          </div>
          <div class="product-details">
            <h3>O2 Concentrator</h3>
            <p> <li>       5 Litre Capacity       </li>
              <li>        3 Years Warranty      </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Patient Monitor' />
          </div>
          <div class="product-details">
            <h3>Patient Monitor</h3>
            <p> <li>      12.1 TFT Color Display  </li>
              <li>      SpO2 + NIBP + ECG + TEMP + RESP  </li>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );

}

export default CardiologyEquipments;
