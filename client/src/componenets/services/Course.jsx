import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import config from "../../config";
import styles from "./Course.module.css";
const cardsData = [
  {
    id: 1,
    title: "Facebook Movies Clips Upload",
    description:
      "Learn how to upload movie clips on Facebook without copyright problems. This course covers everything from choosing the right clips to optimizing for engagement.",
    image: "/images/fb_movie_course.webp",
    amount: 199,
    courseLink:
      " https://drive.google.com/file/d/1RtKBsLVp89ecOG05XsTw3y9UoICfIVq1/view?usp=drivesdk ",
  },
  {
    id: 2,
    title: "1000+ Movies Clip Bundle",
    description:
      "1000+ movies clips bundle here without copyright problems. This clip you can upload on your fb page or profile for monetize & start earning without any issue ",
    image: "/images/1k_movie_clip.webp",
    amount: 199,
    courseLink:
      " https://drive.google.com/file/d/1RtKBsLVp89ecOG05XsTw3y9UoICfIVq1/view?usp=drivesdk ",
  },
  {
    id: 3,
    title: "700+ 2D Animation Funny Reels",
    description:
      "700+ 2D Animation Funny Reels without copyright problems. Add Your Logo & Upload. Go Viral Maximum time, Keep Uploading & Start Earning from today only",
    image: "/images/2d_animation_comedy.webp",
    amount: 199,
    courseLink:
      " https://drive.google.com/file/d/1RtKBsLVp89ecOG05XsTw3y9UoICfIVq1/view?usp=drivesdk ",
  },
  {
    id: 4,
    title: "40,000+ Viral Reels Bundle",
    description:
      "40,000+ Viral Reels Bundle without copyright problems. Add your logo in video and just upload, start earning from today only. Life Time Free Buy Now!",
    image: "/images/40K_reels_bundle.webp",
    amount: 199,
    courseLink:
      " https://drive.google.com/file/d/1RtKBsLVp89ecOG05XsTw3y9UoICfIVq1/view?usp=drivesdk ",
  },
  {
    id: 5,
    title: "40,000+ AI Motivational Reels",
    description:
      "40,000+ AI Motivational Reels without copyright problems. Add your logo in video and just upload, start earning from today only. Life Time Free Buy Now!",
    image: "/images/ai_motivation.webp",
    amount: 199,
    courseLink:
      " https://drive.google.com/file/d/1RtKBsLVp89ecOG05XsTw3y9UoICfIVq1/view?usp=drivesdk ",
  },
];

const Course = () => {
  const [gmailId, setGmailId] = useState("");
  const handlePayment = async (amount, courseLink) => {
    try {
      await sendCourseLinkViaEmail(gmailId, courseLink);
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

  //Gmail-SMS
  const sendCourseLinkViaEmail = async (gmailId, courseLink) => {
    try {
      const response = await axios.post(`${config.apiBaseUrl}/api/send-email`, {
        to: gmailId,
        subject: "Course Purchase Notification",
        text: `${courseLink}`,
      });
      console.log("Email sent:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={styles["course-wrap"]}>
      <div className="container py-1 md:py-2 lg:my-5">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="mt-5 mb-16 text-5xl uppercase text-center leading-snug"
        >
          Social Media Video, Clips & Bundle
          <p className="text-xl text-white font-medium mt-4">
            Explore our latest video courses and bundles for social media
            content creation - Life Time Free.
          </p>
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardsData.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <img
                className="w-full h-[310px] object-top"
                src={card.image}
                alt={card.title}
              />
              <div className="p-4">
                <h2 className="text-3xl lg:text-3xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h2>
                <p className="text-2xl text-gray-700">{card.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div class="max-w-[100px] h-12 relative flex rounded-xl">
                    <input
                      class="peer w-full bg-transparent outline-none px-4 text-xl rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
                      type="email"
                      value={gmailId}
                      placeholder="Enter Gmail"
                      onChange={(e) => setGmailId(e.target.value)}
                    />
                    <label
                      class="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-xl peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
                      for="address"
                    >
                      Email
                    </label>
                  </div>
                  <button
                    onClick={() => handlePayment(card.amount, card.courseLink)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-2xl md:text-3xl font-medium shadow-md hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Buy Now
                  </button>
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{card.amount}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
