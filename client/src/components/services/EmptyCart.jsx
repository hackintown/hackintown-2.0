import { useNavigate } from "react-router-dom";
import styles from "./EmptyCart.module.css"; // Import the CSS module

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Cart is Empty</h1>
        <p className={styles.message}>
          Your cart is currently empty. Add items to your cart to proceed.
        </p>
        <button onClick={handleBackClick} className={styles.button}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
