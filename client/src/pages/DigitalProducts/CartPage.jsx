import PropTypes from "prop-types";
import Cart from "../../components/DigitalProduct/Cart";
import EmptyCart from "../../components/DigitalProduct/EmptyCart";
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
