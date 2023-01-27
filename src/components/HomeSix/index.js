import React from "react";
import { teams } from "../../data/Teams.json";
import BacktoTopCom from "../helpers/BackToTopCom";
import FooterHomeSix from "../partials/Footers/FooterHomeSix";
import HeaderHomeSix from "../partials/Headers/HeaderHomeSix/index";
import PricingSectionFive from "../PricingPages/PricingSections/PricingSectionFive";
import AboutSection from "./AboutSection";
import CallToActionSection from "./CallToActionSection";
import CounterSection from "./CounterSection";
import CustomizeSection from "./CustomizeSection";
import Hero from "./Hero";
import OurServices from "./OurServices";
import Sponsers from "./Sponsers";
import SubscribeSection from "./SubscribeSection";
import TeamSection from "./TeamSection";
import TestimonialSection from "./TestimonialSection";

export default function HomeSix() {
  return (
    <>
      <HeaderHomeSix />
      <Hero />
      <OurServices />
      <AboutSection />
      <CallToActionSection />
      <Sponsers />
      <CustomizeSection />
      <TeamSection teams={teams} />
      <PricingSectionFive />
      <CounterSection />
      <TestimonialSection />
      <SubscribeSection />
      <FooterHomeSix />
      <BacktoTopCom />
    </>
  );
}
