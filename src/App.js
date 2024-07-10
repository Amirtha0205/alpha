import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar'; 
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import OTEquipments from './Components/Products/OTEquipments';
import About from './Components/About/About';
import Services from './Components/services/Services';
import Home from './Components/Home/Home';
import Dummy from './Components/dummy.js';
function App() {
  return (
    <>
     <Router>
    <div className="AlphaTechnologiesNavbar"><Navbar /></div>   
     <Routes>
     <Route path="/Best-OT-Equipments-in-chennai" exact element={<OTEquipments/>} /> 
     <Route path="/About-The-Best-Medical-Equipment-Provider" exact element={<About/>} /> 
    {/* <Route path="/" exact element={<Navbar/>} /> */}
    <Route path="/Contact-The-Best-Medical-Equipment-Provider" exact element={<Contact/>} />
    <Route path="/Services-Alpha-Technologies-Provide" exact element={<Services/>} />
    <Route path="/" exact element={<Home/>} />
    {/* <Route path="/dummy" exact element={<Dummy/>} /> */}
    </Routes>
  </Router>    
    </>
  );
}

export default App;
