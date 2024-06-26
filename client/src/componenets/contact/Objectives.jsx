import React from "react";
import styles from "./Objectives.module.css";
const Objectives = () => {
  return (
    <div className={`${styles["brd-group-3"]} clearfix`}>
      <h3>KEY CAMPAIGN OBJECTIVES</h3>
      <div className={styles["camp-obj-list"]}>
        <ul className={styles["cta-multi-select"]}>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Generate Sales"
              data-ref="key_campaign_objectives"
            >
              Generate Sales
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Website Traffic"
              data-ref="key_campaign_objectives"
            >
              Website Traffic
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Brand awareness"
              data-ref="key_campaign_objectives"
            >
              Brand awareness
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="App Downloads"
              data-ref="key_campaign_objectives"
            >
              App Downloads
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Local store visits and promotions"
              data-ref="key_campaign_objectives"
            >
              Local store visits and promotions
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Create content"
              data-ref="key_campaign_objectives"
            >
              Create content
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Objectives;
