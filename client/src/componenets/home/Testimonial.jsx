import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-heading-wrap">
          <h2>Testimonial</h2>
          <p>What people say about Hackintown</p>
        </div>
        <div className="testimonial-wrap">
          <Slider {...settings}>
            <div className="testimonial-details">
              <div className="testimonial-item">
                <figure>
                  <img src="./images/prabhat-wildstone.jpeg" alt="triller-app" />
                </figure>
                <figcaption className="fig-caption">
                  <h2>Akki Chaudhari</h2>
                  <span>CEO - ExcellentStars Agency</span>
                  <blockquote className="block-quote">
                    "It has been delightful to work with Hackintown. They
                    offered quality solutions within my budget. I would highly
                    recommend them, if someone is looking to hiring a website
                    design and development company. Thanks guys."
                  </blockquote>
                </figcaption>
              </div>
            </div>
            <div className="testimonial-details">
              <div className="testimonial-item">
                <figure>
                <img src="./images/prabhat-wildstone.jpeg" alt="triller-app" />
                </figure>
                <figcaption className="fig-caption">
                  <h2>Sarang Gupta</h2>
                  <span>CEO - Bharat Media</span>
                  <blockquote className="block-quote">
                    “The new site is excellent, receiving good feedback from its
                    user. All bugs were addressed with technical skill, while
                    the new design is modern and attractive. The team was active
                    and communicative, providing good, regular updates.”
                  </blockquote>
                </figcaption>
              </div>
            </div>
            <div className="testimonial-details">
              <div className="testimonial-item">
                <figure>
                <img src="./images/prabhat-wildstone.jpeg" alt="triller-app" />
                </figure>
                <figcaption className="fig-caption">
                  <h2>Virat Kumar Singh</h2>
                  <span>Founder - Elseart Tech Pvt Ltd</span>
                  <blockquote className="block-quote">
                    “It was a great experience to work with Hackintown, they
                    have a professional team that worked dedicatedly from
                    starting to final delivery of my website. I will definitely
                    hire them again.”
                  </blockquote>
                </figcaption>
              </div>
            </div>
            <div className="testimonial-details">
              <div className="testimonial-item">
                <figure>
                <img src="./images/prabhat-wildstone.jpeg" alt="triller-app" />
                </figure>
                <figcaption className="fig-caption">
                  <h2>Akhilendra Sahu</h2>
                  <span>Founder - Quickpr</span>
                  <blockquote className="block-quote">
                    "Their expertise and efficiency are consistently exceeding expectations. Highly
                    recommended for anyone seeking exceptional software
                    solutions!"
                  </blockquote>
                </figcaption>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
