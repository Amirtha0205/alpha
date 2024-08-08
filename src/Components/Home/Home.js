import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import './Home.css';
import IswaryaFertility from '../assests/IswaryaFertility.png';
import CMCVellore from '../assests/Christian_MedicalCollegeHospitalVelloreLogo.png';
import Scansworld from '../assests/scansworld.png'
import ARC_Fertility from '../assests/ARC_IVF.png';
import apolloHospital from '../assests/apollohospital.jpg';
import apolloHospitals from '../assests/apollohospitals.jpg';
//import { useEffect } from 'react';
import LedOTLight from '../assests/LedOTLight.jpg';
import OTtable from '../assests/OTtable.jpg';
import boylesapparatus from '../assests/boylesApparatus.png'
import surgical from '../assests/surgical-diathermy.png'
import ExaminationLight from '../assests/ExaminationLight.png';
import Colposcopy from '../assests/Colposcopy.png';
import AutoClave from '../assests/AutoClave.png'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons';
import Icons from './Icons.js';

function Home() {
    // useEffect = (() => {
    //     AOS.init()
    // }, [])

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "rgb(177, 173, 173)" }}
                onClick={onClick}
            />
        );
    }


    var settings = {
        dots: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidsesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <NextArrow />,
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "#ddd",
                padding: "1px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
         
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    nextArrow: <NextArrow />,
                    prevArrow: <NextArrow />,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    nextArrow: <NextArrow />,
                    prevArrow: <NextArrow />,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow />,
                    prevArrow: <NextArrow />,
                }
            }
        ]
    }

    return (
        <>
            {/* <div classsName='Hospitals-Section'><h1>Meet Mr. Danakotti</h1><h1>Meet Mr. Danakotti</h1></div> */}
            <center><h1>Highlights from our Range</h1><div className="Supply"></div></center>

            <Slider className="slider-container" {...settings}>
                <div ><center> <h3>Led-OT-Light</h3><img className='Equipments-Carousel' src={LedOTLight} alt='Led-OT-Light' /></center></div>
                <div > <center><h3>Operatoring-Theater Table</h3><img className='Equipments-Carousel' src={OTtable} alt='OT-Table' /></center></div>
                <div > <center><h3>Surgical Diathermy</h3> <img className='Equipments-Carousel' src={surgical} alt='Surgical Diathermy' /></center></div>
                <div ><center> <h3>Boyles Apparatus</h3> <img className='Equipments-Carousel' src={boylesapparatus} alt='boyles-Apparatus' /></center></div>
                <div ><center> <h3>Examination Light</h3><img className='Equipments-Carousel' src={ExaminationLight} alt='Examination Light' /></center></div>
            </Slider>
            {/* <div className='Happy_clients'>

                <div className='Hospitals-Details'>
                    <img data-aos="fade-right" src={IswaryaFertility} alt='IswaryaFertility' className='Hospitals' />
                    <img data-aos="fade-right" src={CMCVellore} alt='CMC Vellore' className='Hospitals' />
                    <img data-aos="fade-right" src={Scansworld} alt='Scansworld' className='Hospitals' />
                    <img data-aos="fade-right" src={ARC_Fertility} alt='ARC_Fertility' className='Hospitals' />

                    <img data-aos="fade-right" src={apolloHospital} alt='apolloHospital' className='Hospitals' />
                    <img data-aos="fade-right" src={apolloHospitals} alt='ARC_Fertility' className='Hospitals' />
           */}
            {/* </div>
          
          <div className='Hospitals-Details'>
                    <img data-aos="fade-right" src={CMCVellore} alt='CMC Vellore' className='Hospitals' />
                </div>
                <div className='Hospitals-Details'>  <img data-aos="fade-right" src={Scansworld} alt='Scansworld' className='Hospitals' /></div>
                <div className='Hospitals-Details'>  <img data-aos="fade-right" src={ARC_Fertility} alt='ARC_Fertility' className='Hospitals' />
                 */}
            {/* </div> 

            </div>*/}
            <Icons/>            
            <Footer />
        </>
    );
}

export default Home;