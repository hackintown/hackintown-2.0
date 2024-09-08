import React from "react";
import styles from "./BrandForm.module.css";
const BrandForm = () => {
  return (
    <div className={`${styles["brd-group-8"]} clearfix`}>
      <div className={styles["brd-form-group"]}>
        <label htmlFor="contact_number">Contact Number</label>
        <input
          type="tel"
          name="contact_number"
          id="contact_number"
          placeholder="Mobile Number"
          className={`${styles["brd-inputbox"]}  ${styles["numeric"]}`}
          maxlength="15"
        />
      </div>
      <div className={`${styles["brd-form-group"]} ${styles["lets-right"]}`}>
        <label htmlFor="email_id">Email Id</label>
        <input
          type="email"
          name="email_id"
          id="email_id"
          placeholder="xyz@lorem.com"
          className={styles["brd-inputbox"]}
          maxLength="75"
        />
      </div>
    </div>
  );
};

export default BrandForm;
