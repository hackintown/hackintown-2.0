import React from "react";
import styles from "./Discover.module.css";
const Discover = () => {
  return (
    <div className={`${styles["brd-group-5"]} clearfix`}>
      <h3>DISCOVER YOUR CONTENT CREATORS</h3>
      <div className={styles["disc-creat-list"]}>
        <ul className={styles["cta-multi-select"]}>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Nano"
              data-ref="content_creators"
            >
              Nano
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Micro"
              data-ref="content_creators"
            >
              Micro
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Macro"
              data-ref="content_creators"
            >
              Macro
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Mega"
              data-ref="content_creators"
            >
              Mega
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Mega A+"
              data-ref="content_creators"
            >
              Mega A+
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="celebrities"
              data-ref="content_creators"
            >
              Celebrities
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-value="Platinum celebrities"
              data-ref="content_creators"
            >
              Platinum Celebrities
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Discover;
