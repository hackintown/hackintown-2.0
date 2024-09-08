import React from "react";
import Banner from "../components/home/Banner";
import Services from "../components/home/Services";
import Expertise from "../components/home/Expertise";
import Whyus from "../components/home/Whyus";
import Testimonial from "../components/home/Testimonial";

function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Expertise />
      <Whyus />
      <Testimonial />
    </>
  );
}

export default Home;
