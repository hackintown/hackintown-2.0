import React, { useState } from "react";
import styles from "./TimelineCamp.module.css";
const TimelineCamp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["One-time", "3 months", "6 months", "12 months", "More"];
  return (
    <div className={`${styles["brd-group-4"]} clearfix`}>
      <h3>TIMELINE OF THE CAMPAIGN</h3>
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

export default TimelineCamp;
