import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Cart.module.css"; // Import the CSS module
import PropTypes from "prop-types";
import Button from "../ui/Button/Button";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";

const Cart = ({ cart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => {
      const itemPrice = Number(item.discountPrice) || 0;
      const itemAmount = item.amount || 1;
      return sum + itemPrice * itemAmount;
    }, 0);

    setPrice(totalPrice);

    // Assume tax is 10%
    const taxAmount = totalPrice * 0.1;
    setTax(taxAmount);

    // Apply discount if a valid coupon is applied
    const discountAmount = coupon === "SAVE10" ? totalPrice * 0.1 : 0;
    setDiscount(discountAmount);

    // Calculate final total
    setTotal(totalPrice + taxAmount - discountAmount);
  }, [cart, coupon]);

  const handleCouponChange = (e) => setCoupon(e.target.value);

  const handleCheckout = () => {
    // Handle checkout process here
    alert("Proceeding to checkout");
  };

  const cartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.article
      className={styles.cartContainer}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cartVariants}
    >
      <div className={styles.container}>
        <h2 className={styles.cartTitle}>Your Shopping Cart</h2>
        <AnimatePresence>
          {cart.length === 0 ? (
            <motion.div
              className={styles.emptyCartContainer}
              variants={cartVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className={styles.emptyCartContent}>
                <div className={styles.emptyCartIconWrapper}>
                  <FaShoppingCart className={styles.emptyCartIcon} />
                </div>
                <h3 className={styles.emptyCartHeading}>Your cart is empty</h3>
                <p className={styles.emptyCartMessage}>
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Button
                  variant="primary"
                  size="large"
                  className={styles.emptyCartButton}
                  onClick={() => {
                    /* Navigate to products page */
                  }}
                >
                  Start Shopping
                  <FaArrowRight className={styles.buttonIcon} />
                </Button>
              </div>
            </motion.div>
          ) : (
            cart.map((item) => (
              <motion.div
                className={styles.cartItem}
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div className={styles.itemInfo}>
                  <img
                    className={styles.itemImage}
                    src={item.image}
                    alt={item.title}
                  />
                  <div>
                    <p className={styles.itemTitle}>{item.title}</p>
                    <p className={styles.itemPrice}>
                      Price: Rs {item.discountPrice}
                    </p>
                  </div>
                </div>
                <div className={styles.quantityControls}>
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={() => handleChange(item, -1)}
                    className={styles.quantityButton}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.amount}</span>
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={() => handleChange(item, +1)}
                    className={styles.quantityButton}
                  >
                    +
                  </Button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            className={styles.cartSummary}
            variants={cartVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.coupon}>
              <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={handleCouponChange}
                className={styles.couponInput}
              />
              <Button
                variant="primary"
                size="medium"
                className={styles.applyCouponButton}
              >
                Apply
              </Button>
            </div>
            <div className={styles.summaryItem}>
              <span>Subtotal:</span>
              <span>Rs {price.toFixed(2)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Tax (10%):</span>
              <span>Rs {tax.toFixed(2)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Discount:</span>
              <span>- Rs {discount.toFixed(2)}</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total:</span>
              <span>Rs {total.toFixed(2)}</span>
            </div>
            <Button
              variant="primary"
              size="medium"
              onClick={handleCheckout}
              className={styles.checkoutButton}
            >
              Proceed to Checkout
            </Button>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Cart;
