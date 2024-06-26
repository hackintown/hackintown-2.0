import React from "react";
import styles from "./SelectInfluencers.module.css";
const SelectInfluencers = () => {
  return (
    <div className={`${styles["brd-group-2"]} clearfix`}>
      <h3>SELECT INFLUENCER MARKETING PLATFORMS</h3>
      <div className={styles["influ-list"]}>
        <ul className={styles["cta-multi-select"]}>
          <li>
            <div className={styles["influ-item"]}>
              <a
                href="/"
                data-value="Instagram"
                data-ref="influencer_marketing_platforms"
              >
                <div
                  className={styles["influ-item-bg"]}
                  style={{ backgroundColor: "#E43C7C" }}
                >
                  <span>Instagram</span>
                </div>
                <img
                  src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/instagram-icon.png"
                  alt="Instagram"
                />
              </a>
            </div>
          </li>
          <li>
            <div className={styles["influ-item"]}>
              <a
                href="/"
                data-value="Youtube"
                data-ref="influencer_marketing_platforms"
              >
                <div
                  className={styles["influ-item-bg"]}
                  style={{ backgroundColor: "#FF3C3C" }}
                >
                  <span>Youtube</span>
                </div>
                <img
                  src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/youtube-icon.png"
                  alt="Youtube"
                />
              </a>
            </div>
          </li>
          <li>
            <div className={styles["influ-item"]}>
              <a
                href="/"
                data-value="Facebook"
                data-ref="influencer_marketing_platforms"
              >
                <div
                  className={styles["influ-item-bg"]}
                  style={{ background: "#7957FF" }}
                >
                  <span>Facebook</span>
                </div>
                <img
                  src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/facebook-icon.png"
                  alt="Facebook"
                />
              </a>
            </div>
          </li>

          <li>
            <div className={styles["influ-item"]}>
              <a
                href="/"
                data-value="Twitter"
                data-ref="influencer_marketing_platforms"
              >
                <div
                  className={styles["influ-item-bg"]}
                  style={{ backgroundColor: "#FF3898" }}
                >
                  <span>Twitter</span>
                </div>
                <img
                  src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/twitter-icon.png"
                  alt="Twitter"
                />
              </a>
            </div>
          </li>
          <li>
            <div className={styles["influ-item"]}>
              <a
                href="/"
                data-value="Snapchat"
                data-ref="influencer_marketing_platforms"
              >
                <div
                  className={styles["influ-item-bg"]}
                  style={{ backgroundColor: "#EDCF35" }}
                >
                  <span>Snapchat</span>
                </div>
                <img
                  src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/snapchat-icon.png"
                  alt="Snapchat"
                />
              </a>
            </div>
          </li>
          <li>
            <div className={styles["influ-item"]}>
              <a
                href="/"
                data-value="LinkedIn"
                data-ref="influencer_marketing_platforms"
              >
                <div
                  className={styles["influ-item-bg"]}
                  style={{ backgroundColor: "#7EC96B" }}
                >
                  <span>LinkedIn</span>
                </div>
                <img
                  src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/linkedin-icon.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectInfluencers;
