import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import PlatformStyle from "./PlatformUse.module.css"

const PlatformUse = () => {
    const settings = {
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
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <section className={PlatformStyle.platform_use_sec}>
      <div className="container">
        <div className={PlatformStyle.heading}>
          <h2>Platform we use</h2>
        </div>
        <Slider {...settings} arrows={false}>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/triller-image.png" alt="triller-app"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>Triller</span>
                <i className="icon icon-tiktok"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/tiktok-image.png" alt="Tik-Tok"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>Tik Tok</span>
                <i className="fa-brands fa-tiktok"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/fb-image.png" alt="facebook"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>Facebook</span>
                <i className="fa-brands fa-facebook"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/instagram-image.png" alt="instagram"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>Instagram</span>
                <i className="fa-brands fa-instagram"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/youtube-image.png" alt="youtube"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>Youtube</span>
                <i className="fa-brands fa-youtube"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/linkedin-image.png" alt="linkedin"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>LinkedIn</span>
                <i className="fa-brands fa-linkedin"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/twitter-image.png" alt="twitter"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>Twitter</span>
                <i className="fa-brands fa-twitter"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/whatsaap-image.png" alt="whatsaap"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>WhatsApp</span>
                <i className="fa-brands fa-whatsapp"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/pininterest-image.png" alt="pinterest"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>Pinterest</span>
                <i className="fa-brands fa-pinterest"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
            <div className={PlatformStyle.business_elements_details}>
              <div className={PlatformStyle.platform_item}>
                <figure>
                  <img src="./images/snapchat-image.png" alt="snapchat"/>
                </figure>
                <span className={PlatformStyle.platform_item_name}>Snapchat</span>
                <i className="fa-brands fa-square-snapchat"></i>
                <div className={PlatformStyle.platform_color}></div>
              </div>
            </div>
        </Slider>
      </div>
    </section>
  )
}

export default PlatformUse
