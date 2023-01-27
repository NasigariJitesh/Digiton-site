import { useEffect } from "react";
import { datas } from "../../data/collections.json";
import FooterHomeNine from "../partials/Footers/FooterHomeNine";
import HeaderHomeNine from "../partials/Headers/HeaderHomeNine";
import CallAction from "./CallAction";
import CategoryCollections from "./CategoryCollections";
import CollectionSection from "./CollectionSection";
import Hero from "./Hero";
import LiveAuctions from "./LiveAuctions";
import NewsSection from "./NewsSection";
import SallerSection from "./SallerSection";
import TestimonialSection from "./TestimonialSection";
import WorkingProcess from "./WorkingProcess";

export default function HomeNine() {
  useEffect(() => {
    document.body.classList.add("home-nine");
    document.body.classList.add("text-white");
    return () => {
      document.body.classList.remove("home-nine");
      document.body.classList.remove("text-white");
    };
  });
  return (
    <>
      <div className="page-wrapper">
        <HeaderHomeNine />
        <Hero />
        <LiveAuctions />
        <SallerSection />
        <CollectionSection datas={datas} />
        <WorkingProcess />
        <CategoryCollections />
        <CallAction />
        <TestimonialSection />
        <NewsSection />
        <FooterHomeNine />
      </div>
    </>
  );
}
