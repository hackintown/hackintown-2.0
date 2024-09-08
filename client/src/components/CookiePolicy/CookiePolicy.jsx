import React from "react";
import { motion } from "framer-motion";
import styles from "./CookiePolicy.module.css"; // Import the CSS module

export default function CookiePolicy() {
  return (
    <div className={styles.background}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.container}>
          <motion.div
            className={styles.textCenter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className={styles.heading}>Cookies Policy</h1>
            <p className={styles.subHeading}>
              Hackintown: IT Services, Influencer Marketing, Digital Products
            </p>
          </motion.div>
        </div>
      </motion.header>
      <motion.main
        className={styles.main}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.mutedText}>
            At Hackintown, we use cookies to enhance your experience on our
            website. This policy explains what cookies are, how we use them, and
            how you can control them.
          </p>
        </section>

        <motion.div
          className={styles.grid}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.5, staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>1. What Are Cookies?</h3>
            <p className={styles.mutedText}>
              Cookies are small text files that are stored on your device when
              you visit a website. They are widely used to make websites work
              efficiently and provide information to the owners of the site.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>2. How Do We Use Cookies?</h3>
            <p className={styles.mutedText}>
              Hackintown uses cookies to analyze how visitors interact with our
              website, improve user experience, and personalize content. We also
              use cookies for advertising and marketing purposes.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>3. Types of Cookies We Use</h3>
            <p className={styles.mutedText}>
              - **Essential Cookies:** Necessary for the website to function
              properly.
              <br />- **Analytics Cookies:** Help us understand how visitors
              engage with the site.
              <br />- **Marketing Cookies:** Used to deliver relevant
              advertisements.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>4. Managing Cookies</h3>
            <p className={styles.mutedText}>
              You can control the use of cookies in your browser settings. If
              you choose to disable cookies, some features of our website may
              not function properly.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>5. Third-Party Cookies</h3>
            <p className={styles.mutedText}>
              We may allow third-party service providers to place cookies on
              your device to enhance your experience or provide advertisements.
              These providers are responsible for the cookies they place.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>6. Updates to This Policy</h3>
            <p className={styles.mutedText}>
              We may update this Cookies Policy from time to time. Please review
              this page regularly to stay informed of any changes.
            </p>
          </motion.div>
        </motion.div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.mutedText}>
            If you have any questions or concerns about our use of cookies or
            this Cookies Policy, feel free to contact us:
          </p>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.subTitle}>Email</h3>
              <p className={styles.mutedText}>info@hackintown.com</p>
            </div>
            <div>
              <h3 className={styles.subTitle}>Phone</h3>
              <p className={styles.mutedText}>+91 8851967714</p>
            </div>
            <div>
              <h3 className={styles.subTitle}>Address</h3>
              <p className={styles.mutedText}>
                B-220, First Floor
                <br />
                New Ashok Nagar, New Delhi, 110096
                <br />
                INDIA
              </p>
            </div>
          </div>
        </section>
      </motion.main>
    </div>
  );
}
