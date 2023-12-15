import React from "react";
import style from "./work.module.scss";
import { frameIcon } from "../../assets";

function Cards() {
  const data = [
    {
      img: <img src={frameIcon} alt="Icon" />,
      heading: "Create stunning images",
      p: "Create stunning images using our AI Image generator & select the designs you like.",
    },
    {
      img: <img src={frameIcon} alt="Icon" />,
      heading: "Create stunning images",
      p: "Create stunning images using our AI Image generator & select the designs you like.",
    },
    {
      img: <img src={frameIcon} alt="Icon" />,
      heading: "Create stunning images",
      p: "Create stunning images using our AI Image generator & select the designs you like.",
    },
    {
      img: <img src={frameIcon} alt="Icon" />,
      heading: "Create stunning images",
      p: "Create stunning images using our AI Image generator & select the designs you like.",
    },
    {
      img: <img src={frameIcon} alt="Icon" />,
      heading: "Create stunning images",
      p: "Create stunning images using our AI Image generator & select the designs you like.",
    },
    {
      img: <img src={frameIcon} alt="Icon" />,
      heading: "Create stunning images",
      p: "Create stunning images using our AI Image generator & select the designs you like.",
    },
  ];

  return (
    <section>
      <h1>
        How It <span className="multiColor">Works</span>
      </h1>
      <div className={style.cardsContainer}>
        {data.map((item, index) => (
          <div key={index} className={style.card}>
            <div className={style.cardData}>
              <div className={style.circle}>{item.img}</div>
              <h2>{item.heading}</h2>
              <p>{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
