import React, { useState } from "react";
import styles from "./Budget.module.css";
const Budget = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Can't disclose", "1-5 L", "5-50 L", "50L- 5CR", "5 CR +"];
  return (
    <div className={`${styles["brd-group-7"]} clearfix`}>
      <h3>A RELEVANT BUDGET IN YOUR MIND</h3>
      <div className={styles["timeline-container"]}>
        <div
          className={styles["timeline-line"]}
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        ></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles["timeline-step"]} ${
              activeStep === index ? `${styles["active"]}` : ""
            }`}
            onClick={() => setActiveStep(index)}
          >
            <div className={styles["circle"]}></div>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budget;
