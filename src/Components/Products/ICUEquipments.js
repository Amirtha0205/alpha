import React from 'react';


import './OTEquipments.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer';

function ICUEquipments() {
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
            <img data-aos="fade-left" alt='Star8000 Multipara Monitor' />
          </div>
          <div class="product-details">
            <h3>Star8000 Multipara Monitor</h3>
            <p>
              <li>        12.1 LED color display       </li>
              <li>        SPO2+ NIBP+ ECG+ TEMP+ RESP+ PR      </li>
              <li>       4 Hour Battery       </li>
              <li>      Optional: Touch Screen, dual | BP Etco2, Nellcor /Masimo-SpO2, thermal printer, CMS    </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Vital Sign Monitor' />
          </div>
          <div class="product-details">
            <h3>NC3</h3>
            <h3> Vital Sign Monitor</h3>

            <p> <li>      Color display      </li>
              <li>        SPO2+ NIBP+ Pulse Rate     </li>
              <li>       4 Hour Battery       </li>
              <li>      Easily Portable    </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='High end Multipara Monitor' />
          </div>
          <div class="product-details">
            <h3>C50/C80/C86</h3>
            <h3> High end Multipara Monitor</h3>
            <h4> US FDA</h4>
            <p> <li>       10.4"/12.1"/15" Touch/ water proof display      </li>
              <li>        SPO2+ NIBP+ ECG+ TEMP+ RESP+ PR      </li>
              <li>       4 Hour Battery       </li>
              <li>      Optional: Dual IBP, Etco2, CO, AGM, Nellcor /Masimo-SpO2, thermal printer, CMS    </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Neonatal Monitor' />
          </div>
          <div class="product-details">
            <h3>C60</h3>
            <h3> Neonatal Monitor</h3>
            <h4> US FDA</h4>
            <p> <li>       8'4" Touch/water proof screen display       </li>
              <li>        Masimo SPO2+ NIBP+ ECG+ TEMP+ RESP      </li>
              <li>      Self rescue Apnea Monitor+ O2 Monitor       </li>
              <li>      Optional: Dual IBP, Etco2, Nellcor SPO2, thermal printer, CMS     </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='12 Channel ECG Monitor' />
          </div>
          <div class="product-details">
            <h3>CM1200B</h3>
            <h3> 12 Channel ECG Monitor</h3>
            <p> <li>        5.7" Color Display     </li>
              <li>       Auto reports     </li>   <li>       300 ECG Storage     </li>
              <li>       Lead Status Map  </li>
              <li>       4 Hour Battery       </li>

            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='12 Channel ECG Monitor' />
          </div>
          <div class="product-details">
            <h3>CM1200A</h3>
            <h3> 12 Channel ECG Monitor</h3>
            <p> <li>        8.4" Touch Screen     </li>
              <li>       Auto report     </li>   <li>       300 ECG wave form Storage     </li>
              <li>       Alpha numeric key board </li>
              <li>       Print preview/ 4 Hour Battery       </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='STAR 500E(C11)' />
          </div>
          <div class="product-details">
            <h3>STAR 500E(C11)</h3>
            <h3> Fetal Monitor/ CTG Monitor</h3>
            <p> <li>        5.7" Color Display     </li>
              <li>       FHR, TOCO, FM, AFM Monitor    </li>
              <li>      112mm Thermal Printer   </li>
              <li>       300 CTG Report Storage/ 4 Hour Battery </li>
              <li>     Optional: Twin FHR, Fetal Stimulator        </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='High End Fetal/ Maternal Monitor' />
          </div>
          <div class="product-details">
            <h3>C21/22 </h3>
            <h3> High End Fetal/ Maternal Monitor</h3>
            <p> <li>        12.1" Touch color folding display     </li>
              <li>     FHR, TOCO, FM, AFM Monitor      </li>
              <li>       300 CTG Report Storage     </li>
              <li>      152mm Thermal Printer   </li>
              <li>       4 Hour Battery       </li>
              <li>      Optional: Twin FHR,  SPO2, NIBP, ECG, TEMP, RESP     </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='Syringe Pump' />
          </div>
          <div class="product-details">
            <h3>M200 A</h3>
            <h3> Syringe Pump</h3>
            <p> <li>      0.1ml to 1200 ml   </li>
              <li>       5ml, 10ml, 20ml, 30ml, 50ml Syringes   </li>
              <li>      4 Hour Battery </li>
              <li>     Speed accuracy shall not exceed 3%      </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Anaesthesia Work Station' />
          </div>
          <div class="product-details">
            <h3>AX400/500 </h3>
            <h3> Anaesthesia Work Station</h3>
            <p> <li>        8.4"/ 10.4 Touch screen display     </li>
              <li>    2 Gas(N20, O2)System/ Centerline, Cylinder Supply     </li>
              <li>      Tidal volume - 15ml to 1500 ml/minute     </li>
              <li>     ACGO, Auxiliary O2, FiO2 Monitoring Single/ Dual Vaporizer Position  </li>
              <li>     Modes - VCV, PCV, PSV, SIMV-VCV, SIMV-PCV   </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='High End 3 Channel ECG Machine' />
          </div>
          <div class="product-details">
            <h3>H3</h3>
            <h3> High End 3 Channel ECG Machine</h3>
            <p> <li>        6.2" Touch Screen     </li>
              <li>       12 Channel ECG display    </li>
              <li>     Advance arrythmia detection  </li>
              <li>       Advance Noice Filter </li>
              <li>     10000 ECG WaveFor Storage     </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Non Invasive - Neonatal Ventilator' />
          </div>
          <div class="product-details">
            <h3>NV8 </h3>
            <h3>Non Invasive - Neonatal Ventilator</h3>
            <p> <li>        8.4" LED Touch screen display     </li>
              <li>    Dual CPU for Operation    </li>
              <li>      Non Invasive ventilation modes..NCPAP, Apnea wake up </li>
              <li>    Auto O2 Calibration  </li>
              <li>   NIPPV, SNIPPV, HFNC,,/2 hr. battery   </li>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

}
export default ICUEquipments;
