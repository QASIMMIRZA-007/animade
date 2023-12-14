
import React from "react";
import { ntf1, ntf2, ntf3, ntf4 } from "../../assets";
import style from "./NFTs.module.scss";

function NFTs() {
  const imgData = Array.from({ length: 4 }, () => ({
    images: [
      <img key="1" src={ntf1} alt="NFT 1" />,
      <img key="2" src={ntf2} alt="NFT 2" />,
      <img key="3" src={ntf3} alt="NFT 3" />,
      <img key="4" src={ntf4} alt="NFT 4" />,
    //   <img key="5" src={ntf5} alt="NFT 5" />,
    ],
  }));

  return (
    <section>
      <h1>
        Explore the <span className="multiColor">Potential</span>{" "}
      </h1>
      <div className={style.container}>
        <div className={style.subContainer}>
          <h3>Recently Uploaded NFTs</h3>
          <div className={style.card}>
            {imgData.map((item, index) => (
              <div key={index} className={style.cardImg}>
                {item.images.map((img, imgIndex) => (
                  <React.Fragment key={imgIndex}>{img}</React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.subContainer}>
          <h4>Recently Uploaded Prints</h4>
          <div className={style.card}>
            {imgData.map((item, index) => (
              <div key={index} className={style.cardImg}>
               {item.images.map((img, imgIndex) => (
                  <React.Fragment key={imgIndex}>{img}</React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default NFTs;
