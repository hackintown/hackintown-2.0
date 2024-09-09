import Slider from "react-slick";
import { motion } from "framer-motion";
import styles from "./ProductBanner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import PropTypes from "prop-types";
import { ProductBannerData } from "./ProductBannerData";

// eslint-disable-next-line react/prop-types
const NextArrow = ({ onClick }) => {
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <GrNext />
    </div>
  );
};

// Custom Prev Arrow
// eslint-disable-next-line react/prop-types
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
        {ProductBannerData.map((product) => (
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
                {product.title || "Untitled Product"}
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
ProductBanner.propTypes = {
  ProductBannerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
export default ProductBanner;
