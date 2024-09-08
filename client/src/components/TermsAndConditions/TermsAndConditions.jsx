import React from "react";
import { motion } from "framer-motion";
import styles from "./TermsAndConditions.module.css"; // Import the CSS module

export default function TermsAndConditions() {
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
            <h1 className={styles.heading}>Terms and Conditions</h1>
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
            Welcome to Hackintown. By accessing or using our website, you agree
            to comply with these Terms and Conditions. Please read them
            carefully.
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
            <h3 className={styles.subTitle}>1. Acceptance of Terms</h3>
            <p className={styles.mutedText}>
              By using Hackintown’s website, you agree to be bound by these
              Terms and Conditions. If you disagree with any part of the terms,
              please do not use our website.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>2. Use of Website</h3>
            <p className={styles.mutedText}>
              Our website is for personal, non-commercial use only. You agree
              not to use our site for any unlawful purpose or violate any local,
              state, national, or international laws.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>3. Intellectual Property</h3>
            <p className={styles.mutedText}>
              All content on Hackintown, including text, graphics, logos, and
              images, is the property of Hackintown and protected by copyright
              and trademark laws. Unauthorized use is prohibited.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>4. External Links</h3>
            <p className={styles.mutedText}>
              Our website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of these
              websites.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>5. Limitation of Liability</h3>
            <p className={styles.mutedText}>
              Hackintown will not be held responsible for any damages resulting
              from the use or inability to use our website.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>6. No Login Required</h3>
            <p className={styles.mutedText}>
              Our website does not require user registration, login, or sign-up.
              We provide open access to our content and services without
              creating user accounts.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className={styles.subTitle}>7. Modifications to Terms</h3>
            <p className={styles.mutedText}>
              We reserve the right to modify these Terms and Conditions at any
              time. By continuing to use our website, you agree to the updated
              terms.
            </p>
          </motion.div>
        </motion.div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.mutedText}>
            If you have any questions regarding these Terms and Conditions,
            please contact us at:
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
