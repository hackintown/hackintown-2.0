import React from "react";
import Cart from "../../components/services/Cart";

const CartPage = ({ cart, setCart, handleChange }) => {
  return (
    <div>
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    </div>
  );
};

export default CartPage;
