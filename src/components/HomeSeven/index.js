import React, { useEffect } from "react";
import BacktoTopCom from "../helpers/BackToTopCom";
import FooterHomeSeven from "../partials/Footers/FooterHomeSeven";
import HeaderHomeSeven from "../partials/Headers/HeaderHomeSeven";
import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";
import CallAction from "./CallAction";
import FaqSection from "./FaqSection";
import Hero from "./Hero";
import PricingSection from "./PricingSection";
import ServiceSection from "./ServiceSection";
import SolutionSection from "./SolutionSection";
import TestimonialSection from "./TestimonialSection";

export default function HomeSeven() {
  useEffect(() => {
    document.body.classList.add("home-seven");
    return () => {
      document.body.classList.remove("home-seven");
    };
  });
  /** *
   * TODO
   * FAQ DATA
   */
  const faq = [
    {
      id: 1,
      title: "What are the questions for data science?",
      description:
        "Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.",
    },
    {
      id: 2,
      title: "Which is better AI or data science?",
      description:
        "Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.",
    },
    {
      id: 3,
      title: "Why data science is the future?",
      description:
        "Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.",
    },
  ];
  return (
    <>
      <HeaderHomeSeven />
      <Hero />
      <AboutSection />
      <ServiceSection />
      <SolutionSection />
      <FaqSection datas={faq} />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
      <CallAction />
      <FooterHomeSeven />
      <BacktoTopCom />
    </>
  );
}
