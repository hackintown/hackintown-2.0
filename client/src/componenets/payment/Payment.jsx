import React, { useState } from "react";
import axios from "axios";
import config from "../../config";
const Payment = () => {
  const [amount, setAmount] = useState(1000); // Example amount in paise (₹10.00)

  const handlePayment = async () => {
    try {
      const { data } = await axios.post(
        `${config.apiBaseUrl}/api/payment/createOrder`,
        { amount }
      );

      const options = {
        key: config.RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: "Hackintown",
        description: "Test Transaction",
        handler: async (response) => {
          const paymentId = response.razorpay_payment_id;
          const orderId = response.razorpay_order_id;
          const signature = response.razorpay_signature;

          // Optionally, verify the payment on the server side here
          console.log("Payment successful:", paymentId, orderId, signature);
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div>
      <h2>Buy Now</h2>
      <p>Amount: ₹{amount / 100}</p>
      <button onClick={handlePayment} className="text-5xl m-5">
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
