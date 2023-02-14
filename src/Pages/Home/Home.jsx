import React from "react";
import logo from "../../assets/images/logo.png";
import { CastSlider } from "../../components/CastSilder";
import { EpisodeSlider } from "../../components/EpisodeSlider/EpisodeSlider";
import Hero from "../../components/Hero/Hero";
import { LocationSlider } from "../../components/LocationSlider/LocationSlider";

const Home = () => {
  return (
    <div>
      <div className="px-5 md:px-[80px] lg:px-[116px] py-[53px] bg-fixed  overflow-hidden bg-[url('./src/assets/images/home/backgrounds/background.png')] ">
        <div className="flex justify-center">
          <img className="w-[227px] h-12 " src={logo} />
        </div>
        <Hero />
        <CastSlider />
        <EpisodeSlider />
        <LocationSlider />
      </div>
    </div>
  );
};

export default Home;
