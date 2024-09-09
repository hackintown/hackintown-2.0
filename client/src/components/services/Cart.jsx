import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css"; // Import the CSS module
import PropTypes from "prop-types";
import Button from "../ui/Button/Button";

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

  return (
    <article className={styles.cartContainer}>
      <div className="container">
        <h2 className={styles.cartTitle}>Your Shopping Cart</h2>
        {cart?.map((item) => (
          <div className={styles.cartItem} key={item.id}>
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
          </div>
        ))}
        <div className={styles.cartSummary}>
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
        </div>
      </div>
    </article>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Cart;
