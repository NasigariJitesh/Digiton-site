import React from "react";
import { blogs } from "../../data/blogs.json";
import { teams } from "../../data/Teams.json";
import BacktoTopCom from "../helpers/BackToTopCom";
import FooterHomeTwo from "../partials/Footers/FooterHomeTwo";
import HeaderHomeTwo from "../partials/Headers/HeaderHomeTwo";
import AboutSection from "./AboutSection";
import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import NewsSection from "./NewsSection";
import OurGallerySection from "./OurGallerySection";
import Services from "./Services";
import ServiceSection from "./ServiceSection";
import SponserSection from "./SponserSection";
import SubscriptionSection from "./SubscriptionSection";
import TeamSection from "./TeamSection";
import WorkprocessSection from "./WorkprocessSection";

function HomeTwo() {
  return (
    <>
      <HeaderHomeTwo />
      <Hero />
      <Services />
      <AboutSection />
      <SponserSection />
      <ServiceSection />
      <GetInTouch />
      <TeamSection teams={teams} />
      <WorkprocessSection />
      <SubscriptionSection />
      <OurGallerySection />
      <NewsSection blogs={blogs} />
      <FooterHomeTwo />
      <BacktoTopCom />
    </>
  );
}

export default HomeTwo;
