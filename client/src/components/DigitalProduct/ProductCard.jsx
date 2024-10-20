import React from "react";
import { motion } from "framer-motion";
import styles from "./ProductCard.module.css";
import ProductData from "./productData";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../ui/Button/Button";
import { IoIosStar } from "react-icons/io";
import PropTypes from "prop-types";

const ProductCard = ({ handleClick }) => {
  return (
    <>
      <div className={styles.productGrid}>
        {ProductData.map((product) => (
          <motion.div
            className={styles.card}
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <img
              className={styles.image}
              src={product.image}
              alt={product.title}
            />
            <div className={styles.content}>
              <h2 className={styles.title}>{product.title}</h2>
              <h4 className={styles.subtitle}>{product.subtitle}</h4>
              {/* <p className={styles.description}>{product.description}</p> */}
              <div className={styles.ratingContainer}>
                <div className={styles.ratingStars}>
                  <IoIosStar className={styles.starIcon} />
                  <span>{product.rating}</span>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.reviewsText}>
                  {`${product.reviewNo} reviews`}
                </div>
              </div>
              <div className={styles.priceContainer}>
                <span className={styles.originalPrice}>
                  ₹{product.originalPrice}
                </span>
                <span className={styles.discountPrice}>
                  ₹{product.discountPrice}
                </span>
              </div>
              <div className={styles.buttonGroup}>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => handleClick(product)}
                >
                  Add to Cart
                </Button>

                <Button
                  variant="primary"
                  size="medium"
                  className={styles.whatsapp}
                  onClick={() => {
                    const message = `Hi, I want to order ${product.title}`;
                    const whatsappUrl = `https://wa.me/919289905136?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  Order on WhatsApp <FaWhatsapp size="20" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
ProductCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default ProductCard;
