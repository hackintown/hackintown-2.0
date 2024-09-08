import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DiscoverStyle from "./Discover.module.css";

const Discover = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={DiscoverStyle.discover_sec}>
      <div className="container">
        <div className={DiscoverStyle.discover_wrap}>
          <Slider arrows={false} {...settings}>
            <div className={DiscoverStyle.discover_info}>
              <h2>
                Bored of digital agencies claiming to be your influencer
                marketing solution providers?
              </h2>
            </div>
            <div className={DiscoverStyle.discover_info}>
              <h2>
                Planning for Instagram Influencer Marketing for the first time?
              </h2>
            </div>
            <div className={DiscoverStyle.discover_info}>
              <h2>Do you want your product to be reviewed?</h2>
            </div>
            <div className={DiscoverStyle.discover_info}>
              <h2>
                Want to know the cost of Instagram Reels or Instagram Stories?
              </h2>
            </div>
            <div className={DiscoverStyle.discover_info}>
              <h2>
                How do you discover the most suitable influencers for your
                brand?
              </h2>
            </div>
            <div className={DiscoverStyle.discover_info}>
              <h2>Want to engage 1000 influencers for your brand?</h2>
            </div>
            <div className={DiscoverStyle.discover_info}>
              <h2>Interested in planning your content strategy?</h2>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Discover;
