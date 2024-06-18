import React from "react";
import Banner from "../componenets/influencer/Banner";
import Datascore from "../componenets/influencer/Datascore";
import Discover from "../componenets/influencer/Discover";
import Delivers from "../componenets/influencer/Delivers";
import TopInfluencers from "../componenets/influencer/TopInfluencers";
import PlatformUse from "../componenets/influencer/PlatformUse";
import Genre from "../componenets/influencer/Genre";
import LestChat from "../componenets/influencer/LestChat";

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
