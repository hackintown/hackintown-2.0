import React from "react";
import styles from "./TabSection.module.css";

const TabSection = ({ activeTab, onTabChange }) => {
  return (
    <div className={styles.tabContainer}>
      <button
        className={activeTab === "bundles" ? styles.active : ""}
        onClick={() => onTabChange("bundles")}
      >
        Bundles
      </button>
      <button
        className={activeTab === "products" ? styles.active : ""}
        onClick={() => onTabChange("products")}
      >
        Single Products
      </button>
      <button
        className={activeTab === "special" ? styles.active : ""}
        onClick={() => onTabChange("special")}
      >
        Special Deals
      </button>
    </div>
  );
};

export default TabSection;
