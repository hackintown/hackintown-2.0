// src/components/TermsAndConditions.js
import React from "react";
import styles from "./TermsAndConditions.module.css";

const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Terms and Conditions</h1>
      <p className={styles.intro}>
        Welcome to HackInTown. These terms and conditions outline the rules and
        regulations for the use of HackInTown's Website.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subheading}>1. Introduction</h2>
        <p className={styles.text}>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use HackInTown if you do not agree to
          all of the terms and conditions stated on this page.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>2. Intellectual Property Rights</h2>
        <p className={styles.text}>
          Unless otherwise stated, HackInTown and/or its licensors own the
          intellectual property rights for all material on HackInTown. All
          intellectual property rights are reserved.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>3. Restrictions</h2>
        <p className={styles.text}>
          You are specifically restricted from all of the following:
        </p>
        <ul className={styles.list}>
          <li>
            Publishing any website material in any other media without prior
            consent.
          </li>
          <li>
            Selling, sublicensing, and/or otherwise commercializing any website
            material.
          </li>
          <li>
            Using this website in any way that is or may be damaging to this
            website.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>4. Your Privacy</h2>
        <p className={styles.text}>Please read our Privacy Policy.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>5. Limitation of Liability</h2>
        <p className={styles.text}>
          In no event shall HackInTown, nor any of its officers, directors, and
          employees, be held liable for anything arising out of or in any way
          connected with your use of this website.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>6. Governing Law & Jurisdiction</h2>
        <p className={styles.text}>
          These terms will be governed by and interpreted in accordance with the
          laws of the State of [Your State], and you submit to the non-exclusive
          jurisdiction of the state and federal courts located in [Your State]
          for the resolution of any disputes.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
