import React from "react";
import style from "./navbar.module.scss";
import { Logo } from "../../assets";

function Navbar() {
  return (
    <div className={` ${style.navbar} container `}>
      <div className={style.navLeft}>
        <img src={Logo} className={style.navImg} />
      </div>
      <div className={style.navRight}>
        <ul>
          <li>How it work</li>
          <li>Pricing</li>
          <button className={style.logBtn}>Login</button>
          <button className={style.signBtn}>Sign Up</button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
