// src/components/CookiePolicy.js
import React from 'react';
import styles from './CookiePolicy.module.css';

const CookiePolicy = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Cookie Policy</h1>
            <p className={styles.intro}>
                This Cookie Policy explains how HackInTown uses cookies and similar technologies to recognize you when you visit our website.
            </p>
            
            <section className={styles.section}>
                <h2 className={styles.subheading}>1. What are Cookies?</h2>
                <p className={styles.text}>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
            </section>
            
            <section className={styles.section}>
                <h2 className={styles.subheading}>2. Why We Use Cookies</h2>
                <p className={styles.text}>
                    We use cookies for several reasons. Some cookies are required for technical reasons; some enable a personalized experience for both visitors and registered users.
                </p>
                <ul className={styles.list}>
                    <li>Essential cookies: These cookies are strictly necessary to provide you with services available through our website.</li>
                    <li>Performance and functionality cookies: These cookies are used to enhance the performance and functionality of our website.</li>
                </ul>
            </section>
            
            <section className={styles.section}>
                <h2 className={styles.subheading}>3. Your Choices Regarding Cookies</h2>
                <p className={styles.text}>
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings.
                </p>
            </section>
            
            <section className={styles.section}>
                <h2 className={styles.subheading}>4. More Information</h2>
                <p className={styles.text}>
                    For more information about cookies, including how to see what cookies have been set on your device and how to manage and delete them, visit www.allaboutcookies.org.
                </p>
            </section>
            
            <section className={styles.section}>
                <h2 className={styles.subheading}>5. Contact Us</h2>
                <p className={styles.text}>
                    If you have any questions about our use of cookies or other technologies, please email us at support@hackintown.com.
                </p>
            </section>
        </div>
    );
};

export default CookiePolicy;
