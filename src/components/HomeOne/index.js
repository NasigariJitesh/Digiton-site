import { blogs } from "../../data/blogs.json";
import BacktoTopCom from "../helpers/BackToTopCom";
import FooterHomeOne from "../partials/Footers/FooterHomeOne";
import HeaderHomeOne from "../partials/Headers/HeaderHomeOne/index";
import AboutSection from "./AboutSection";
import FeatureSection from "./FeatureSection";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import NewsSection from "./NewsSection";
import PricingSection from "./PricingSection";
import ServiceSection from "./ServiceSection";
import WorkProcessSection from "./WorkProcessSection";

function HomeOne() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeaderHomeOne />
      <Hero />
      <ServiceSection />
      <AboutSection />
      <FeatureSection />
      <WorkProcessSection />
      <PricingSection />
      <GallerySection />
      <NewsSection blogs={blogs} />
      <FooterHomeOne />
      <BacktoTopCom />
    </div>
  );
}

export default HomeOne;
