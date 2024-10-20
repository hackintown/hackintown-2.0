import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductBanner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import PropTypes from "prop-types";

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

// Updated Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

// Dummy products data
const dummyProducts = [
  {
    id: 1,
    image: "https://via.placeholder.com/800x400?text=Product+1",
    title: "Exclusive Smartphone",
    description: "Latest model with advanced features and 5G capability",
    price: 999.99,
    discount: 10,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/800x400?text=Product+2",
    title: "Ultra HD Smart TV",
    description: "Immersive viewing experience with AI-powered picture quality",
    price: 1499.99,
    discount: 15,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x400?text=Product+3",
    title: "Noise-Cancelling Headphones",
    description: "Premium sound quality with long-lasting battery life",
    price: 299.99,
    discount: 20,
  },
];

const ProductBanner = ({ products = dummyProducts }) => {
  // Check if products is undefined or empty
  if (!products || products.length === 0) {
    return <div className={styles.bannerContainer}>No products available</div>;
  }

  return (
    <div className={styles.bannerContainer}>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className={styles.slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <div className={styles.textOverlay}>
              <AnimatePresence>
                <motion.h2
                  className={styles.title}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {product.title}
                </motion.h2>
                <motion.p
                  className={styles.description}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {product.description}
                </motion.p>
                <motion.div
                  className={styles.priceTag}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <span className={styles.price}>${product.price}</span>
                  {product.discount && (
                    <span className={styles.discount}>
                      {product.discount}% OFF
                    </span>
                  )}
                </motion.div>
                <motion.button
                  className={styles.ctaButton}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Now
                </motion.button>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

ProductBanner.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.number,
    })
  ),
};

export default ProductBanner;
