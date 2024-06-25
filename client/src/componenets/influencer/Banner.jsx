import React from "react";
import InfluencerStyle from "./Banner.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className={InfluencerStyle.banner_section}>
      <div className="container">
        <div className={InfluencerStyle.banner_content}>
          <h1>PLATFORM FOR BRANDS AND INFLUENCERS</h1>
          <span>
            We connect brands with Instagram,Youtube and Short Form Video apps.
          </span>
          <div className={InfluencerStyle.btn_wrap}>
            <Link to="/contact-us" className={`${InfluencerStyle.btn} btn`}>
              I'm a brand
            </Link>
            <Link to="/influencer" className={`${InfluencerStyle.btn} btn`}>
              I'm and influencer
            </Link>
          </div>
          <div className={InfluencerStyle.exclusive_sec}>
            <div className={InfluencerStyle.exclusive_wrap}>
              <div className={InfluencerStyle.exclusive_info}>
                <div className={InfluencerStyle.exclusive_info_item}>
                  <div className={InfluencerStyle.image_wrap}>
                    <img
                      className={InfluencerStyle.star_card}
                      src="/images/aashna-hegde-img.png"
                      loading="lazy"
                    />
                    <img
                      className={InfluencerStyle.star_card_overlay}
                      src="/images/aashna-hegde.png"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={InfluencerStyle.exclusive_info_item}>
                  <div className={InfluencerStyle.image_wrap}>
                    <img
                      className={InfluencerStyle.star_card}
                      src="/images/awez-darbar-img.png"
                      loading="lazy"
                    />
                    <img
                      className={InfluencerStyle.star_card_overlay}
                      src="/images/awez-darbar-overlay.png"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={InfluencerStyle.exclusive_info_item}>
                  <div className={InfluencerStyle.image_wrap}>
                    <img
                      className={InfluencerStyle.star_card}
                      src="/images/third-card-img.png"
                      loading="lazy"
                    />
                    <img
                      className={InfluencerStyle.star_card_overlay}
                      src="/images/third-card-icon.png"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
