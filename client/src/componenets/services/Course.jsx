import React, { useState } from "react";
import axios from "axios";
import config from "../../config";
const Course = () => {
  const [amount, setAmount] = useState(19900); // Example amount in paise (₹10.00)

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
    <>
      <div className="mx-auto max-w-[500px] py-20 px-4">
        <div className="w-full p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-4/5 object-cover rounded-t-lg"
            alt="Facebook Movies Clips Course"
            src="/images/fb_movie_course.webp"
          />
          <div className="p-4">
            <h2 className="text-3xl md:text-4xl text-black font-semibold">
              Facebook Movies Clips Upload
            </h2>
            <p className="text-gray-600 text-xl mt-2 mb-3">
              Learn how to uploading movie clips on Facebook without copyright
              problem. This course covers everything from choosing the right
              clips to optimizing for engagement.
            </p>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-950 text-xl">
                  Identify Engaging Clips
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-950 text-xl">
                  Optimize for Engagement
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-950 text-xl">
                  Copyright Compliance
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handlePayment}
                class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 inline-flex items-center justify-center px-12 py-3 border-0 rounded-full text-xl md:text-2xl font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Buy Now
              </button>
              <span className="text-3xl md:text-4xl text-gray-900 font-bold ml-4">Amount: ₹{amount / 100}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
