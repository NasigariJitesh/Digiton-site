import React from "react";
import BacktoTopCom from "../helpers/BackToTopCom";
import FooterHomeFour from "../partials/Footers/FooterHomeFour/index";
import HeaderHomeFour from "../partials/Headers/HeaderHomeFour";
import AboutSection from "./AboutSection";
import AboutTabSection from "./AboutTabSection";
import GallarySection from "./GallarySection";
import Hero from "./Hero";
import OurTeamSection from "./OurTeamSection";
import PricingSection from "./PricingSection";
import RecentArticle from "./RecentArticle";
import WhatCanDo from "./WhatCanDo";
import WorkProcessSection from "./WorkProcessSection";

export default function HomeFour() {
  return (
    <>
      <HeaderHomeFour />
      <Hero />
      <WhatCanDo />
      <AboutSection />
      <AboutTabSection />
      <GallarySection />
      <OurTeamSection />
      <WorkProcessSection />
      <PricingSection />
      <RecentArticle />
      <FooterHomeFour />
      <BacktoTopCom />
    </>
  );
}
