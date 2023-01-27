import React from "react";
import { blogs } from "../../data/blogs.json";
import BacktoTopCom from "../helpers/BackToTopCom";
import FooterHomeFive from "../partials/Footers/FooterHomeFive/index";
import HeaderHomeFive from "../partials/Headers/HeaderHomeFive";
import AboutSection from "./AboutSection";
import AnotherAboutSection from "./AnotherAboutSection";
import CallToAction from "./CallToAction";
import ContactSection from "./ContactSection";
import FunFact from "./FunFact";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import OurServices from "./OurServices";
import PricingSection from "./PricingSection";
import RecentArticle from "./RecentArticle";
import SponserSection from "./SponserSection";
import TestimonialSection from "./TestimonialSection";

export default function HomeFive() {
  return (
    <>
      <HeaderHomeFive />
      <Hero />
      <CallToAction />
      <AboutSection />
      <OurServices />
      <FunFact />
      <AnotherAboutSection />
      <GallerySection />
      <ContactSection />
      <TestimonialSection />
      <PricingSection />
      <RecentArticle blogs={blogs} />
      <SponserSection />
      <FooterHomeFive />
      <BacktoTopCom />
    </>
  );
}
