import React from "react";
import { blogs } from "../../data/blogs.json";
import { teams } from "../../data/Teams.json";
import useToggle from "../../hooks/useToggle";
import BacktoTopCom from "../helpers/BackToTopCom";
import VideoPopupCom from "../helpers/VideoPopupCom";
import NewsSection from "../HomeTwo/NewsSection";
import FooterHomeTwo from "../partials/Footers/FooterHomeTwo/index";
import HeaderHomeThree from "../partials/Headers/HeaderHomeThree";
import AboutSection from "./AboutSection";
import GallerySection from "./GallerySection";
import GetInTouchSection from "./GetInTouchSection";
import Hero from "./Hero";
import PricingSection from "./PricingSection";
import ServiceSection from "./ServiceSection";
import SubscribeSection from "./SubscribeSection";
import TeamSection from "./TeamSection";
import TestimonialSection from "./TestimonialSection";
import WorkProcessSection from "./WorkProcessSection";

export default function HomeThree() {
  const [videoPop, setValue] = useToggle(false);
  return (
    <>
      {videoPop && (
        <VideoPopupCom
          videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
          handler={setValue.toggle}
        />
      )}
      <HeaderHomeThree />
      <Hero videoHandler={setValue.toggle} />
      <ServiceSection />
      <WorkProcessSection />
      <AboutSection />
      <TeamSection teams={teams} />
      <TestimonialSection />
      <PricingSection />
      <SubscribeSection />
      <GallerySection />
      <NewsSection blogs={blogs} className="news-section-three pb-0" />
      <GetInTouchSection />
      <FooterHomeTwo className="footer-home-three pt-150" />
      <BacktoTopCom />
    </>
  );
}
