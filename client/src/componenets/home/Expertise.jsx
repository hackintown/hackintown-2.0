import React from "react";
import "./Expertise.css";
import Slider from "react-slick";

const Expertise = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="our-expertise">
      <div className="container">
        <div className="heading-wrap">
          <h2>Our Expertise</h2>
          <p>
            Delivering quality software products with agile, trend-driven
            service for aspiring businesses."
          </p>
        </div>
        <div className="expertise-wrap">
          <Slider {...settings}>
            <div className="expertise-details">
              <div className="expertisein-item c1">
                <img
                  className="expertise-icons"
                  src="./images/ex-icon1.png"
                  alt="expertise-icon"
                />
                <span className="expertisein-item-name">Graphics</span>
              </div>
            </div>
            <div className="expertise-details">
              <div className="expertisein-item c2">
                <img
                  className="expertise-icons"
                  src="./images/ex-icon2.png"
                  alt="expertise-icon"
                />
                <span className="expertisein-item-name">Websites</span>
              </div>
            </div>
            <div className="expertise-details">
              <div className="expertisein-item c3">
                <img
                  className="expertise-icons"
                  src="./images/ex-icon3.png"
                  alt="expertise-icon"
                />
                <span className="expertisein-item-name">Application</span>
              </div>
            </div>
            <div className="expertise-details">
              <div className="expertisein-item c4">
                <img
                  className="expertise-icons"
                  src="./images/ex-icon4.png"
                  alt="expertise-icon"
                />
                <span className="expertisein-item-name">Marketing</span>
              </div>
            </div>
            <div className="expertise-details">
              <div className="expertisein-item c5">
                <img
                  className="expertise-icons"
                  src="./images/ex-icon5.png"
                  alt="expertise-icon"
                />
                <span className="expertisein-item-name">Maintenance</span>
              </div>
            </div>
            <div className="expertise-details">
              <div className="expertisein-item c6">
                <img
                  className="expertise-icons"
                  src="./images/ex-icon6.png"
                  alt="expertise-icon"
                />
                <span className="expertisein-item-name">
                  Quality
                  <br />
                  Assurance
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
