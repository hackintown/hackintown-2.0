import React from "react";
import ProductBanner from "../../components/DigitalProduct/ProductBanner";
import ProductCard from "../../components/DigitalProduct/ProductCard";
import styles from "./DigitalProduct.module.css";
import PropTypes from "prop-types";

const DigitalProductPage = ({ handleClick }) => {
  return (
    <main className={styles.digitalProduct}>
      <div className={styles.container}>
        {/* Section for Product Banner */}
        <section className={styles.bannerSection}>
          <ProductBanner />
        </section>

        {/* Section for Digital Products */}
        <section className={styles.productsSection}>
          <h1>Top Viral Bundles</h1>
          <div className={styles.productsGrid}>
            <ProductCard handleClick={handleClick} />
          </div>
        </section>
      </div>
    </main>
  );
};
DigitalProductPage.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default DigitalProductPage;
