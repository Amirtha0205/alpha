import './App.css';
import React from 'react';
import Navba from './Components/Navbar/Navbar'; 
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import OTEquipments from './Components/Products/OTEquipments';
import ICUEquipments from './Components/Products/ICUEquipments';
import About from './Components/About/About';
import Services from './Components/services/Services';
import Home from './Components/Home/Home';
import LaboratoryEquipments from './Components/Products/LaboratoryEquipments';
import CardiologyEquipments from './Components/Products/CardiologyEquipments';

function App() {
  return (
    <>
     <Router>
    <div className="AlphaTechnologiesNavbar"><Navba /></div>   
     <Routes>
     <Route path="/Best-OT-Equipments-in-chennai" exact element={<OTEquipments/>} /> 
     <Route path="/Best-ICU-Equipments-in-chennai" exact element={<ICUEquipments/>} /> 
     <Route path="/Best-Cardiology-Equipments-in-chennai" exact element={<CardiologyEquipments/>} /> 
     <Route path="/About-The-Best-Medical-Equipment-Provider" exact element={<About/>} /> 
     <Route path="//Best-Laboratory-Equipments-in-Chennai" exact element={<LaboratoryEquipments/>} /> 
    <Route path="/Contact-The-Best-Medical-Equipment-Provider" exact element={<Contact/>} />
    <Route path="/Services-Alpha-Technologies-Provide" exact element={<Services/>} />
    <Route path="/" exact element={<Home/>} />
   
    </Routes>
  </Router>    
    </>
  );
}

export default App;
