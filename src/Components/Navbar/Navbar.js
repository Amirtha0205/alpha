
import React from 'react';
import './Navbar.css';
import AlphaTech from '../assests/Alpha-Technologies-LOGO.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Navba() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/"><img className="Alpha_technogies_logo" alt="Alpha_technogies_logo" src={AlphaTech} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <DropdownButton
                  as='ButtonGroup'
                  key='down'
                  id='dropdown-button-drop-down'
                  drop='down'
                  variant="secondary"
                  title={` Products `}>  
                            
                  <DropdownButton
                  as='ButtonGroup'
                  key='start'
                  id='dropdown-button-drop-start'
                  drop='start'
                  variant="secondary"
                  title={` Products By Category `}>

                     <Dropdown.Item className='btn-group dropright' href="/Best-OT-Equipments-in-Chennai">
                     OT Equipments
                  </Dropdown.Item> <Dropdown.Item className='btn-group dropright' href="/Best-ICU-Equipments-in-Chennai">                    
                  ICU Equipments
                  </Dropdown.Item> <Dropdown.Item className='btn-group dropright' href="/Best-Laboratory-Equipments-in-Chennai">
                  Laboratory Equipments
                  </Dropdown.Item>
                  <Dropdown.Item className='btn-group dropright' href="/Best-Cardiology-Equipments-in-Chennai">
                  Cardiology Equipments
                  </Dropdown.Item> <Dropdown.Item className='btn-group dropright' href="/Best-POCT-Products-in-Chennai">
                  POCT Products
                  </Dropdown.Item> <Dropdown.Item className='btn-group dropright' href="/Best-Ultrasound-Echo-Machines-in-Chennai">
                  Ultrasound and Echo Machines
                  </Dropdown.Item>
                 
                  </DropdownButton>
                            
    
                  <DropdownButton
                  as='ButtonGroup'
                  key='start'
                  id='dropdown-button-drop-start'
                  drop='start'
                  variant="secondary"
                  title={` Products By Brand `}>
                     <Dropdown.Item className='btn-group dropright' href="#action/3.2">
                    Comen
                  </Dropdown.Item> 
                  <Dropdown.Item className='btn-group dropright' href="#action/3.2">
                    Mindray
                  </Dropdown.Item> 
                  <Dropdown.Item className='btn-group dropright' href="#action/3.2">
                  Concept Biomedicals
                  </Dropdown.Item> 
                  <Dropdown.Item className='btn-group dropright' href="#action/3.2">
                    Gretin
                  </Dropdown.Item>
                  <Dropdown.Item className='btn-group dropright' href="#action/3.2">
                    Proton
                  </Dropdown.Item>
                  </DropdownButton>
                 
                  </DropdownButton>   
                <Nav.Link href="/About-The-Best-Medical-Equipment-Provider">About</Nav.Link>
                                    
              </Nav>
              <Nav>
                <Nav.Link href="/Services-Alpha-Technologies-Provide">Services</Nav.Link>
                <Nav.Link eventKey={2} href="/Contact-The-Best-Medical-Equipment-Provider">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }




export default Navba;