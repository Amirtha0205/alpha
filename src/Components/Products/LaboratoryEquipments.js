import React from 'react';
import './OTEquipments.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer';

function LaboratoryEquipments() {
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
            <img data-aos="fade-left" alt='Semi Auto Biochemistry Analyzer' />
          </div>
          <div class="product-details">
            <h3>BA 88A</h3>
            <h3>Semi Auto Biochemistry Analyzer</h3>
            <p>
              <li>       7" TFT touch screen display     </li>
              <li>       Wavelengths range 340 to 670 nm    </li>
              <li>   Upto 200 test can programmed     </li>
              <li>     Testing mode, flowcell or cuvette    </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Auto Clinical Chemistry Analyzer' />
          </div>
          <div class="product-details">
            <h3>BS-240</h3>
            <h3> Auto Clinical Chemistry Analyzer</h3>

            <p> <li>     Throughput upto 200 Test/hr</li>
              <li>       Flexible loading upto 40 sample and 80 reagents positions    </li>
              <li>      Refrigerated compartment for both samples and reagents     </li>
              <li>     Minimal reagent volume 100 μl </li>
              <li>    On-board laundry</li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='3 Part Auto Hematology Analyzer' />
          </div>
          <div class="product-details">
            <h3>BC-20/20S</h3>
            <h3>3 Part Auto Hematology Analyzer</h3>

            <p> <li>       10.4/8.4" TFT touch proof display      </li>
              <li>       21 Parameters + 3 histograms</li>
              <li>     Throughput 40 test/hour      </li>
              <li>      Detailed flag message for pre-diagnostics   </li>
              <li>      200,000 result storage with histograms   </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='5 Part Auto Hematology Analyzer' />
          </div>
          <div class="product-details">
            <h3>BC-5130</h3>
            <h3> 5 Part Auto Hematology Analyzer</h3>

            <p> <li>      5 Part differentiation, 25 reportable parameters + 10 research Parameters        </li>
              <li>        4 scattergrams and 3 histograms   </li>
              <li>      Laser scatter+chemical dye + flow cytonetry technology       </li>
              <li>      Capability to flag 25 abnormal blood cell morphology    </li>
              <li>     60 samples per/hr   </li>
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
            <img data-aos="fade-right" alt=' Auto Coagulation Analyzer' />
          </div>
          <div class="product-details">
            <h3>C2000-1/2/4</h3>
            <h3> Auto Coagulation Analyzer</h3>
            <p> <li>       Electromagnetic Clotting Detection    </li>
              <li>      Parameters- PT+APTT+FIB etc    </li>   <li>       Sample volume : &ge; 200 μl</li>
              <li>       Reagent Volume : 50 μl - 200 μl </li>
              <li>       Testing chanal 1/2/4      </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='ELISA READER' />
          </div>
          <div class="product-details">
            <h3>MR 96A</h3>
            <h3> ELISA READER</h3>
            <p> <li>       Touch-screen, 7.8" large color LCD display   </li>
              <li>       Can perform 12 different tests in one plate   </li>
              <li>   Variable time and speed shaking modes   </li>
              <li>      Microplate types: 96/48-well plate </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='ELISA WASHER' />
          </div>
          <div class="product-details">
            <h3>MW 12A </h3>
            <h3> ELISA WASHER</h3>
            <p> <li>    Compatible with flat, U or V-bottom plates    </li>
              <li>     2 Wash modes with interchangable manifolds for 8 and 12 well strips      </li>
              <li>      Automatic liquid monitoring system   </li>
              <li>    Wash Programs : Upto 100  </li>
              <li>     Wash Cycles: 0 to 9 μl    </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='Chemiluminescene Immunoassay (CLIA)' />
          </div>
          <div class="product-details">
            <h3>Maglumi 600</h3>
            <h3> Chemiluminescene Immunoassay (CLIA)</h3>
            <p> <li>     Throughput: 180 tests/hour  </li>
              <li>       Upto 16 sample positions  </li>
              <li>      4 Reagents on board </li>
              <li> Random, batch and STAT function    </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Erythrocyte Sedimentation Rate' />
          </div>
          <div class="product-details">
            <h3>ESR - LBY 20 </h3>
            <h3> Erythrocyte Sedimentation Rate</h3>
            <p> <li>    Dynamic scan, easy operation   </li>
              <li>   Testing Chanel 20 positions    </li>
              <li>      Testing time 30 minutes   </li>
              <li>     Automatically calibration to the test results at 25°C  </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='Binocular Microscope' />
          </div>
          <div class="product-details">
           
            <h3> Binocular Microscope</h3>
            <p> <li>      Clear Vision </li>
              <li>      High accuracy    </li>
            </p>
          </div>
        </div>
        <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-right" alt='Centrifuge' />
          </div>
          <div class="product-details">
            <h3>Centrifuge </h3>
            <p> <li>        4/8 Bucket  </li>
            </p>
          </div>
        </div>
     
      <div class="product-item">
          <div class="product-image">
            <img data-aos="fade-left" alt='Urine Analyzer' />
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
        </div>
      <Footer />
    </>
  );

}
export default LaboratoryEquipments;
