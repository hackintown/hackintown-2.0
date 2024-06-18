import React from "react";
import DataStyle from "./Datascore.module.css";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

 function Number({n}){
   const {number} = useSpring({
    from: {number:0},
    number: n,
    delay:200,
    config: { mass:1, tension: 20, friction:10 },
   })
   return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
 }

const Datascore = () => {
  return (
    <section className={DataStyle.data_section}>
      <div className="container">
        <div className={DataStyle.our_data_wrap}>
          <div className={DataStyle.data_wrap}>
            <img src="./images/brands-work-icon.png" alt="brand-work-icon" />
            <div className={DataStyle.info_wrap}>
              <h2><Number n ={100}/>+</h2>
              <span>Brands work with Hackintown</span>
            </div>
          </div>
          <div className={DataStyle.data_wrap}>
            <img src="./images/influ-earn-icon.png" alt="brand-work-icon" />
            <div className={DataStyle.info_wrap}>
            <h2><Number n ={10000}/>+</h2>
              <span>Influencers earn with Hackintown</span>
            </div>
          </div>
          <div className={DataStyle.data_wrap}>
            <img src="./images/camp-del-icon.png" alt="brand-work-icon" />
            <div className={DataStyle.info_wrap}>
            <h2><Number n ={95}/>%</h2>
              <span>Campaigns delivered niche content at Scale</span>
            </div>
          </div>
        </div>
        <div className={DataStyle.influ_btn_wrap}>
          <ul className={DataStyle.influ_btn}>
            <li><Link to="/">Instagram Influencers</Link></li>
            <li><Link to="/">Youtube Influencers</Link></li>
            <li><Link to="/">SFV Influencers</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Datascore;
