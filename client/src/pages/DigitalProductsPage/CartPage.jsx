import Cart from "../../components/services/Cart";

import PropTypes from "prop-types";
import EmptyCart from "../../components/services/EmptyCart";
const CartPage = ({ cart, setCart, handleChange }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
CartPage.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default CartPage;
