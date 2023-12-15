// // import React from "react";
// // import style from "./navbar.module.scss";
// // import { Logo } from "../../assets";

// // function Navbar() {
// //   return (
// //     <div classNameName={` ${style.navbar} container `}>
// //       <div classNameName={style.navLeft}>
// //         <img src={Logo} classNameName={style.navImg} />
// //       </div>
// //       <div classNameName={style.navRight}>
// //         <ul>
// //           <li>How it work</li>
// //           <li>Pricing</li>
// //           <button classNameName={style.logBtn}>Login</button>
// //           <button classNameName={style.signBtn}>Sign Up</button>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Navbar;

// import React from 'react'
// import './navbar.css'
// import { Logo } from "../../assets";
// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg">
//   <div className=" Container">
//     <a className="navbar-brand" href="#">
//     <div className="navLeft">
//         <img src={Logo} className="navImg" />
//       </div>
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul classNameName='me-auto mb-2 mb-lg-0 navRight'>
//         <li>How It Works</li>
//         <li>Pricing</li>
//         <button className='logBtn'>Login</button>
//         <button className='signBtn'>Sign Up</button>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import './navbar.css';
import { Logo } from "../../assets";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <div className="navLeft">
              <img src={Logo} className="navImg" alt="Logo" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-item-center d-flex">
              <li className="nav-item">How It Works</li>
              <li className="nav-item">Pricing</li>
              <li className="nav-item">
                <button className="logBtn">Login</button>
              </li>
              <li className="nav-item">
                <button className="signBtn">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
