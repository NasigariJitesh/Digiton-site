import { useEffect } from "react";
import useToggle from "../../hooks/useToggle";
import VideoPopupCom from "../helpers/VideoPopupCom";
import FooterHomeEight from "../partials/Footers/FooterHomeEight";
import HeaderHomeEight from "../partials/Headers/HeaderHomeEight";
import ActionSection from "./ActionSection";
import CounterSection from "./CounterSection";
import FeatureSection from "./FeatureSection";
import Hero from "./Hero";
import NewsSection from "./NewsSection";
import ProjectSection from "./ProjectSection";
import ProtectSection from "./ProtectSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";

export default function HomeEight() {
  const [videoPop, setValue] = useToggle(false);
  useEffect(() => {
    document.body.classList.add("home-eight");
    return () => {
      document.body.classList.remove("home-eight");
    };
  });
  return (
    <div style={{ overflowX: "hidden" }}>
      {videoPop && (
        <VideoPopupCom
          videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
          handler={setValue.toggle}
        />
      )}
      <HeaderHomeEight />
      <Hero />
      <FeatureSection />
      <ServiceSection />
      <CounterSection />
      <ProtectSection videoHandler={setValue.toggle} />
      <ProjectSection />
      <TestimonialSection />
      <NewsSection />
      <ActionSection />
      <FooterHomeEight />
    </div>
  );
}
