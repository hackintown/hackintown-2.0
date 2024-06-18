import React from 'react'
import Niche from "./Delivers.module.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong
} from "@fortawesome/free-solid-svg-icons";


const Delivers = () => {
  return (
 <section className={Niche.hack_deli_sec}>
  <div className='container'>
    <div className={Niche.deliver_wrap}>
        <Link className={Niche.scroll_arrow} to='/'><FontAwesomeIcon className={Niche.arrow} icon={faArrowDownLong} /></Link>
        <h2>HACKINTOWN DELIVERS NICHE CONTENT AT SCALE</h2>
        <span>Top IG Influencers we work with!</span>
    </div>
  </div>
 </section>
  )
}

export default Delivers
