import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={`${styles["banner-content-wrap"]} relative`}>
          <div className={styles["brand-content"]}>
            <p className="text-white text-2xl font-semibold mx-auto mb-10">
              We're happy to have you on board with us. Please share the details
              of your brief and someone from our Amazing team will get back to
              you shortly!
            </p>
            <a
              href="/"
              class={styles.downarrow}
              onclick="scrollToSection('brand-contact-form')"
            >
              <svg
                width="16"
                height="59"
                viewBox="0 0 16 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.2929 58.7071C7.68342 59.0976 8.31659 59.0976 8.70711 58.7071L15.0711 52.3431C15.4616 51.9526 15.4616 51.3195 15.0711 50.9289C14.6805 50.5384 14.0474 50.5384 13.6569 50.9289L8 56.5858L2.34315 50.9289C1.95262 50.5384 1.31946 50.5384 0.928934 50.9289C0.53841 51.3195 0.53841 51.9526 0.928934 52.3431L7.2929 58.7071ZM7 4.37114e-08L7 58L9 58L9 -4.37114e-08L7 4.37114e-08Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className={styles["brand-form-wrap"]} id="brand-contact-form">
            <h3>About Your Brand</h3>
            <div className={styles["brand-contact-form"]}>
              <form
                className={styles["contact-form"]}
                name="contact-form"
                id="contact-form"
                action=""
                method="post"
                novalidate="novalidate"
              >
                <div className={`${styles["brd-group-1"]} clearfix`}>
                  <div className={`${styles["brd-form-group"]}`}>
                    <label htmlFor="brand_name">Brand Name: </label>
                    <input
                      type="text"
                      name="brand_name"
                      id="brand_name"
                      placeholder="Enter your brand name"
                      className={styles["brd-inputbox"]}
                    />
                  </div>
                  <div className={styles["brd-form-group-camp"]}>
                    <label htmlFor="campaign_description">
                      Describe your campaign :
                    </label>
                    <textarea
                      type="message"
                      name="campaign_description"
                      id="campaign_description"
                      rows="2"
                      cols="80"
                      placeholder="Write what your campaign is all about"
                      className={styles["brd-inputbox"]}
                    ></textarea>
                  </div>
                </div>
                <div className={`${styles["brd-group-2"]} clearfix`}>
                <h3>SELECT INFLUENCER MARKETING PLATFORMS</h3>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
