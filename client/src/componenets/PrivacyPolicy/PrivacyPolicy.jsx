import React from "react";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <p className={styles.intro}>
        Welcome to HackInTown. We value your privacy and are committed to
        protecting your personal information.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subheading}>1. Information We Collect</h2>
        <p className={styles.text}>
          We collect various types of information in connection with the
          services we provide, including:
        </p>
        <ul className={styles.list}>
          <li>
            Personal information you provide when registering, such as name,
            email, etc.
          </li>
          <li>Information collected through the use of our services.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>2. How We Use Your Information</h2>
        <p className={styles.text}>
          We use the information we collect for various purposes, including:
        </p>
        <ul className={styles.list}>
          <li>To provide and maintain our services.</li>
          <li>To notify you about changes to our services.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>3. Sharing Your Information</h2>
        <p className={styles.text}>
          We may share your information with third parties in certain
          circumstances, including:
        </p>
        <ul className={styles.list}>
          <li>With service providers to provide and maintain our services.</li>
          <li>When we have your consent to do so.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>4. Security</h2>
        <p className={styles.text}>
          We take reasonable measures to protect your information from
          unauthorized access or disclosure.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>5. Changes to This Privacy Policy</h2>
        <p className={styles.text}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>6. Contact Us</h2>
        <p className={styles.text}>
          If you have any questions about this Privacy Policy, please contact us
          at support@hackintown.com.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
