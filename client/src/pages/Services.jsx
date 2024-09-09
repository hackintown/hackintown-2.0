import ProductCard from "../components/services/ProductCard";
import ProductBanner from "../components/services/ProductBanner";
import styles from "./DigitalProduct.module.css";
import PropTypes from "prop-types";

const Services = ({ handleClick }) => {
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
Services.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Services;
