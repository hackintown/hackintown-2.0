import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import styles from "./ProductBanner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

// Product data for the slider (You can use your ProductData.js)
const productData = [
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3c613a3254ca93d1.png?q=20",
    title: "Premium Product 1",
    description: "High-Quality Downloadable Item",
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20",
    description: "Learn new skills with this exclusive product.",
  },
  {
    id: 3,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ab9ccf8a8ad6a05f.jpg?q=20",
    title: "Ultimate Product 3",
    description: "An ultimate experience with this product.",
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <GrNext />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <GrPrevious />
    </div>
  );
};

// Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const ProductBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Slider {...sliderSettings}>
        {productData.map((product) => (
          <motion.div
            key={product.id}
            className={styles.slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <div className={styles.textOverlay}>
              <motion.h2
                className={styles.title}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {product.title}
              </motion.h2>
              <motion.p
                className={styles.description}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {product.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductBanner;
