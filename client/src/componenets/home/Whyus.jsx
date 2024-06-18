import React from "react";
import "./Whyus.css";

const Whyus = () => {
  return (
    <section className="why-hackintown">
      <div className="container">
        <div className="whyus-heading-wrap">
          <h2>Why Hackintown</h2>
          <p>
            Our grand vision drives us to be actively present across all major
            technology platforms, enabling us to deliver an extensive range of
            services for your needs.
          </p>
        </div>
        <div className="image-wrap">
          <img src="./images/why-hackintown.png" alt="zig-zag image" />
        </div>
      </div>
    </section>
  );
};

export default Whyus;
