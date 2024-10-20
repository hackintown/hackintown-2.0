import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./EmptyCart.module.css";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <motion.div
      className={styles.emptyCartContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.emptyCartContent}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          className={styles.emptyCartIconWrapper}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaShoppingCart className={styles.emptyCartIcon} />
        </motion.div>
        <motion.h1
          className={styles.emptyCartHeading}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Your Cart is Empty
        </motion.h1>
        <motion.p
          className={styles.emptyCartMessage}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Looks like you haven't added anything to your cart yet. Start shopping
          and discover amazing products!
        </motion.p>
        <motion.button
          onClick={handleBackClick}
          className={styles.emptyCartButton}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue Shopping <FaArrowRight className={styles.buttonIcon} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default EmptyCart;
