// // import React, { useState } from 'react';
// // import './dummy.css';
// // import { Link } from "react-router-dom";

// // function Dummy() {
// //     const [openMenu, setOpenMenu] = useState(null);

// //     const handleMenuToggle = (menu) => {
// //         setOpenMenu(openMenu === menu ? null : menu);
// //     };

// //     return (
// //         <nav className="navbar">
// //             <ul className="navbar-menu"> 
// //                 <li className="navbar-item">
// //                 <a to="/"> Home |</a></li>
// //                     <li className='nav-item'>

// //                     <a href="#" className="navbar-link" onClick={() => handleMenuToggle('menu1')}>Products |</a>
// //                     {openMenu === 'menu1' && (
// //                         <ul className="dropdown-menu">
// //                             <li className="dropdown-item">
// //                                 <a href="#" className="dropdown-link">Submenu 1-1</a>
// //                             </li>
// //                             <li className="dropdown-item">
// //                                 <a href="#" className="dropdown-link">Submenu 1-2</a>
// //                                 <ul className="dropdown-menu">
// //                                     <li className="dropdown-item">
// //                                         <a href="#" className="dropdown-link">Submenu 1-2-1</a>
// //                                     </li>
// //                                     <li className="dropdown-item">
// //                                         <a href="#" className="dropdown-link">Submenu 1-2-2</a>
// //                                     </li>
// //                                 </ul>
// //                             </li>
// //                             <li className="dropdown-item">
// //                                 <a href="#" className="dropdown-link">Submenu 1-3</a>
// //                             </li>
// //                         </ul>
// //                     )}
// //                 </li>
// //                 <li className='nav-item'> <Link to=""> Services |</Link></li>
// //           <li className='nav-item'> <Link to="/About-Alpha-technologies"> About |</Link></li>          

// //           <button className='nav-item'><Link to="contact"> Contact </Link></button>
// //             </ul>
// //         </nav>
// //     );
// // }

// // export default Dummy;


// import React, { useState } from 'react';
// import './dummy.css';
// import AlphaTech from './assests/Alpha-Technologies-LOGO.jpg';

// function Dummy() {
//     const [openMenu, setOpenMenu] = useState(null);

//     const handleMenuToggle = (menu) => {
//         setOpenMenu(openMenu === menu ? null : menu);
//     };

//     return (
//         <nav className="navbar">
//             <img className="navbar-logo" src={AlphaTech} alt='Alpha Technologies Logo' />
//             <ul className="navbar-menu">
//                 <li className="navbar-item">
//                     <a href="#home" className="navbar-link">Home</a>
//                 </li>
//                 <li className="navbar-item">
//                     <a href="#" className="navbar-link" onClick={() => handleMenuToggle('menu1')}>Menu 1</a>
//                     {openMenu === 'menu1' && (
//                         <ul className="dropdown-menu">
//                             <li className="dropdown-item">
//                                 <a href="#" className="dropdown-link">Submenu 1-1</a>
//                             </li>
//                             <li className="dropdown-item">
//                                 <a href="#" className="dropdown-link">Submenu 1-2</a>
//                                 <ul className="dropdown-menu">
//                                     <li className="dropdown-item">
//                                         <a href="#" className="dropdown-link">Submenu 1-2-1</a>
//                                     </li>
//                                     <li className="dropdown-item">
//                                         <a href="#" className="dropdown-link">Submenu 1-2-2</a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className="dropdown-item">
//                                 <a href="#" className="dropdown-link">Submenu 1-3</a>
//                                 <ul className="dropdown-menu">
//                                     <li className="dropdown-item">
//                                         <a href="#" className="dropdown-link">Submenu 1-2-1</a>
//                                     </li>
//                                     <li className="dropdown-item">
//                                         <a href="#" className="dropdown-link">Submenu 1-2-2</a>
//                                     </li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     )}
//                 </li>
//                 <li className="navbar-item">
//                     <a href="#about" className="navbar-link">About</a>
//                 </li>
//                 <li className="navbar-item">
//                     <a href="#services" className="navbar-link">Services</a>
//                 </li>
//                 <li className="navbar-item">
//                     <a href="#contact" className="navbar-link">Contact</a>
//                 </li>
               
//             </ul>
//         </nav>
//     );
// }

// export default Dummy;
