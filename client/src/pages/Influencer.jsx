import React from "react";
import Banner from "../components/influencer/Banner";
import Datascore from "../components/influencer/Datascore";
import Discover from "../components/influencer/Discover";
import Delivers from "../components/influencer/Delivers";
import TopInfluencers from "../components/influencer/TopInfluencers";
import PlatformUse from "../components/influencer/PlatformUse";
import Genre from "../components/influencer/Genre";
import LestChat from "../components/influencer/LestChat";

const Influencer = () => {
  return (
    <div>
      <Banner />
      <Datascore />
      <Discover />
      <Delivers />
      <TopInfluencers />
      <PlatformUse />
      <Genre />
      <LestChat />
    </div>
  );
};

export default Influencer;
