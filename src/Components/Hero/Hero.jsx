import React from "react";
import style from "./hero.module.scss";
import { frameIcon } from "../../assets";
function Hero() {
  return (
    <section>
    <div className={style.heroContainer}>
      <div className={style.card}>
        <div className={style.cardData}>
          <img src={frameIcon} />
          <p>
            Design, upload and Mint 100s of NFTs in minutes to Opensea using AI.
          </p>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.cardData}>
          <img src={frameIcon} />
          <p>
            Design, upload and Mint 100s of NFTs in minutes to Opensea using AI.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;
