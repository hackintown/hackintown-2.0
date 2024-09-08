import React from "react";
import { motion } from "framer-motion";
import styles from "./TermsOfUse.module.css"; // Import the CSS module

export default function TermsOfUse() {
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
            <h1 className={styles.heading}>Hackintown</h1>
            <p className={styles.subHeading}>
              IT Services, Influencer Marketing, Digital Products
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
          <h2 className={styles.sectionTitle}>Terms of Use</h2>
          <p className={styles.mutedText}>
            Welcome to the Hackintown website. By accessing or using our
            website, you agree to be bound by these terms of use and our privacy
            policy.
          </p>
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
                By accessing or using the Hackintown website, you agree to be
                bound by these terms of use and our privacy policy. If you do
                not agree to these terms, please do not use our website.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className={styles.subTitle}>2. Use of the Website</h3>
              <p className={styles.mutedText}>
                You may use the Hackintown website for your personal,
                non-commercial use only. You may not use the website for any
                illegal or unauthorized purpose.
              </p>
            </motion.div>
            {/* Repeat for other sections */}
          </motion.div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.mutedText}>
            If you have any questions or concerns about these terms of use,
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
