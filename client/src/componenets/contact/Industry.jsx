import React from "react";
import styles from "./Industry.module.css";
const Industry = () => {
  return (
    <div className={`${styles["brd-group-6"]} clearfix`}>
      <h3>INDUSTRY</h3>
      <div className={styles["brd-indus-list"]}>
        <ul className={styles["cta-multi-select"]}>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Fashion &amp; Beauty"
              data-ref="industry"
            >
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/beauty-icon.png"
                alt="beauty"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Fashion &amp; Beauty</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Entertainment &amp; Comedy"
              data-ref="industry"
            >
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/entertainment-icon.png"
                alt="entertainment"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Entertainment &amp; Comedy</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Travel &amp; Lifestyle"
              data-ref="industry"
            >
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/travel-icon.png"
                alt="travel"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Travel &amp; Lifestyle</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Technology"
              data-ref="industry"
            >
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/tech-icon.png"
                alt="tech"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Technology</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Motivational"
              data-ref="industry"
            >
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/motivation-icon.png"
                alt="motivational"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Motivational</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Gaming"
              data-ref="industry"
            >
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/game-icon.png"
                alt="game"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Gaming</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Sports &amp; fitness"
              data-ref="industry"
            >
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/fitness-icon.png"
                alt="fitness"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Sports &amp; fitness</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Business &amp; Finance"
              data-ref="industry"
            >
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/finance-icon.png"
                alt="finance"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Business &amp; Finance</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Dance &amp; Music"
              data-ref="industry"
            >
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/music-icon.png"
                alt="music"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Dance &amp; Music</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" data-value="Food" data-ref="industry">
              <img
                src="https://barcodeent.com/wp-content/themes/Barcode/assets/img/icons/food-icon.png"
                alt="food"
              />
              <div className={styles["idn-img-txt"]}>
                <span>Food</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Industry;
