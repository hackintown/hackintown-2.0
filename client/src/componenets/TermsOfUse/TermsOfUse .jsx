// src/components/TermsOfUse.js
import React from "react";
import styles from "./TermsOfUse.module.css";

const TermsOfUse = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Terms of Use</h1>
      <p className={styles.intro}>
        Welcome to HackInTown. By using our services, you agree to comply with
        and be bound by the following terms and conditions.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subheading}>1. Acceptance of Terms</h2>
        <p className={styles.text}>
          By accessing or using our services, you agree to be bound by these
          terms of use and all applicable laws and regulations.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>2. Changes to Terms</h2>
        <p className={styles.text}>
          We reserve the right to modify these terms at any time. Your continued
          use of our services following any changes signifies your acceptance of
          the new terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>3. User Responsibilities</h2>
        <p className={styles.text}>
          You agree to use our services only for lawful purposes and in a way
          that does not infringe the rights of others or restrict their use and
          enjoyment of our services.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>4. Intellectual Property</h2>
        <p className={styles.text}>
          All content included on our services, such as text, graphics, logos,
          and software, is the property of HackInTown or its content suppliers
          and is protected by copyright laws.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>5. Termination</h2>
        <p className={styles.text}>
          We may terminate or suspend your access to our services immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if you breach these terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>6. Governing Law</h2>
        <p className={styles.text}>
          These terms shall be governed and construed in accordance with the
          laws of the jurisdiction in which HackInTown operates, without regard
          to its conflict of law provisions.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>7. Contact Us</h2>
        <p className={styles.text}>
          If you have any questions about these terms, please contact us at
          support@hackintown.com.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
