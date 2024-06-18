import React from "react";
import TopStyle from "./TopInfluencer.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { Link } from "react-router-dom";

const TopInfluencers = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplayspeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <section className={TopStyle.top_influ_sec}>
      <div className="container">
        <div className={TopStyle.heading}>
          <h2>Our Top Influencers</h2>
        </div>
        <Slider {...settings}  arrows={false}>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/mr-faisu.jpeg" alt="faisu-img" />
                <h2>
                  <span className={TopStyle.text_white}>
                    <h3>Mr Faisu</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img
                  src="/images/darshan-raval.jpeg"
                  alt="darshan-raval-img"
                />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Darshan Raval</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/prabhat-wildstone.jpeg" alt="" />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Prabhat Chaudhari</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/priyanka-reels.jpg" alt="" />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Priyanka Dwivedi</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/nimra-dominoz.jpeg" alt="" />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Nimra Shaikh</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/surbhi-rathore.jpeg" alt="" />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Surbhi Rathore</h3>
                  </span>
                </h2>
              </Link>
            </div>
        </Slider>
        <div className={TopStyle.second_slide_wrap}>
        <Slider {...settings} arrows={false}>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/mr-faisu.jpeg" alt="faisu-img" />
                <h2>
                  <span className={TopStyle.text_white}>
                    <h3>Mr Faisu</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img
                  src="/images/darshan-raval.jpeg"
                  alt="darshan-raval-img"
                />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Darshan Raval</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/prabhat-wildstone.jpeg" alt="" />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Prabhat Chaudhari</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/priyanka-reels.jpg" alt="" />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Priyanka Dwivedi</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/nimra-dominoz.jpeg" alt="" />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Nimra Shaikh</h3>
                  </span>
                </h2>
              </Link>
            </div>
            <div className={TopStyle.slider}>
              <Link to="/" title="">
                <img src="/images/surbhi-rathore.jpeg" alt="" />
                <h2>
                  <span className={TopStyle.text_white}>
                  <h3>Surbhi Rathore</h3>
                  </span>
                </h2>
              </Link>
            </div>
        </Slider>
        </div>
      </div>
    </section>
  );
};

export default TopInfluencers;
