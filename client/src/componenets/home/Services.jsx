import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServicesStyle from "./Services.module.css";

const Services = () => {
  const settings ={
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}
  return (
    <section className={ServicesStyle.services_section} loading="lazy">
      <div className="container">
        <div className={ServicesStyle.services_wrap}>
          <Slider {...settings}>
            <div className={ServicesStyle.slider_wrap}>
              <div className={ServicesStyle.item}>
                <div className={ServicesStyle.service_content}>
                  <div className={ServicesStyle.service_img}>
                    <img src="./images/meet-and-greet.svg" alt="images"/>
                  </div>
                  <div className={ServicesStyle.service_para}>
                    <h3 className={ServicesStyle.service_title}>UI/UX Design</h3>
                    <span className={ServicesStyle.get_now}>Get Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={ServicesStyle.slider_wrap}>
              <div className={ServicesStyle.item}>
                <div className={ServicesStyle.service_content}>
                  <div className={ServicesStyle.service_img}>
                  <img src="./images/brand-enquiry.svg" alt="images" />
                  </div>
                  <div className={ServicesStyle.service_para}>
                    <h3 className={ServicesStyle.service_title}>Web Development</h3>
                    <span className={ServicesStyle.get_now}>Get Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={ServicesStyle.slider_wrap}>
              <div className={ServicesStyle.item}>
                <div className={ServicesStyle.service_content}>
                  <div className={ServicesStyle.service_img}>
                  <img src="./images/brand-enquiry.svg" alt="images"/>
                  </div>
                  <div className={ServicesStyle.service_para}>
                    <h3 className={ServicesStyle.service_title}>App Development</h3>
                    <span className={ServicesStyle.get_now}>Get Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={ServicesStyle.slider_wrap}>
              <div className={ServicesStyle.item}>
                <div className={ServicesStyle.service_content}>
                  <div className={ServicesStyle.service_img}>
                    <img src="./images/brand-enquiry.svg" alt="images"/>
                  </div>
                  <div className={ServicesStyle.service_para}>
                    <h3 className={ServicesStyle.service_title}>Influencer Marketing</h3>
                    <span className={ServicesStyle.get_now}>Get Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={ServicesStyle.slider_wrap}>
              <div className={ServicesStyle.item}>
                <div className={ServicesStyle.service_content}>
                  <div className={ServicesStyle.service_img}>
                    <img src="./images/brand-enquiry.svg" alt="images" />
                  </div>
                  <div className={ServicesStyle.service_para}>
                    <h3 className={ServicesStyle.service_title}>Digital Marketing</h3>
                    <span className={ServicesStyle.get_now}>Get Now</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
