import React from "react";
import styles from "./Banner.module.css"
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className={styles.banner_section}>
    <div className={`${styles.banner_bg} ${styles.gradient_color1}`}></div>
    <div className={`${styles.banner_bg} ${styles.gradient_color2}`}></div>
      <div className="container">
        <div class={styles.banner_content}>
        <div className={styles.banner_left}>
          <div class={styles.title}>
            <h1>
              TRANSFORMING
              <br />
              COMPLEXITY INTO SIMPLICITY
            </h1>
          </div>
          <p>
            We’re a globally Leading IT & Influencer marketing agency.
            We pride ourselves in delivering data_driven performance, real
            human relationships, expert creative strategy, authentic engaging
            content, and laser_sharp paid media targeting.
          </p>
          <div className={styles.btn_wrap}>
            <Link to='/' className={`${styles.btn} btn`}>Sign Up</Link>
            <Link to='/' className={`${styles.btn} btn`}>Login</Link>
          </div>
          </div>
          <div className={styles.banner_right}>
            <img src="./images/robort-hand.png" alt="robort_image"/>
          </div>
        </div> 
      </div>
    </section>
  );
}
