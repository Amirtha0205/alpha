import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import './Home.css';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
//import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
function Icons() {
    return (
        <>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
           <FontAwesomeIcon icon="far fa-shipping-fast" />
           <i className="fa-solid fa-truck-fast"></i>     
<FontAwesomeIcon icon="fa-solid fa-truck-fast" />
            <i class="fa-solid fa-truck-fast"></i> */}
<div  className="icons">
<FontAwesomeIcon icon={'fa-Coffee'}/>
</div>
  </>
    );
}

export default Icons;