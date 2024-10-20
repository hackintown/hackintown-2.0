import React, { useState } from "react";
import styles from "./FilterSection.module.css";

const FilterSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className={styles.filterContainer}>
      <h2>Filter Products</h2>
      <div className={styles.filterOptions}>
        <button
          className={selectedFilter === "all" ? styles.active : ""}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={selectedFilter === "popular" ? styles.active : ""}
          onClick={() => handleFilterChange("popular")}
        >
          Popular
        </button>
        <button
          className={selectedFilter === "new" ? styles.active : ""}
          onClick={() => handleFilterChange("new")}
        >
          New Arrivals
        </button>
        <button
          className={selectedFilter === "bundle" ? styles.active : ""}
          onClick={() => handleFilterChange("bundle")}
        >
          Best Seller
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
