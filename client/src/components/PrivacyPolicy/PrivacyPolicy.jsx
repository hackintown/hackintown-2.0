import React from "react";
import { motion } from "framer-motion";
import styles from "./PrivacyPolicy.module.css"; // Import the CSS module

export default function PrivacyPolicy() {
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
            <h1 className={styles.heading}>Privacy Policy</h1>
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
            Welcome to Hackintown’s Privacy Policy. We are committed to
            protecting your personal information and your right to privacy. If
            you have any questions or concerns about this policy or our
            practices, please contact us.
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
              <h3 className={styles.subTitle}>
                1. What Information Do We Collect?
              </h3>
              <p className={styles.mutedText}>
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                our services, when you participate in activities on the website,
                or otherwise contact us.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className={styles.subTitle}>
                2. How Do We Use Your Information?
              </h3>
              <p className={styles.mutedText}>
                We use personal information collected via our website for a
                variety of business purposes, including to provide and improve
                our services, communicate with you, and comply with legal
                obligations.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className={styles.subTitle}>
                3. Will Your Information Be Shared?
              </h3>
              <p className={styles.mutedText}>
                We do not share or sell your personal information to third
                parties unless it is necessary to provide you with services or
                is required by law.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className={styles.subTitle}>
                4. How Do We Keep Your Information Safe?
              </h3>
              <p className={styles.mutedText}>
                We have implemented appropriate security measures designed to
                protect the security of any personal information we process.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className={styles.subTitle}>5. Your Privacy Rights</h3>
              <p className={styles.mutedText}>
                Depending on your location, you may have certain rights
                regarding your personal information, including the right to
                access, correct, or delete your personal data.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className={styles.subTitle}>6. Updates to This Policy</h3>
              <p className={styles.mutedText}>
                We may update this privacy policy from time to time. We will
                notify you of any changes by updating the “Last updated” date at
                the top of this policy.
              </p>
            </motion.div>
          </motion.div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.mutedText}>
            If you have any questions or concerns about this privacy policy or
            the practices of Hackintown, please contact us at:
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
