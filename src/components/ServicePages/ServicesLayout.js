import React from "react";
import GetInTouchSection from "../AboutPages/AboutOne/GetInTouchSection";
import BacktoTopCom from "../helpers/BackToTopCom";
import Layouts from "../helpers/Layouts";
import PricingSection from "../HomeThree/PricingSection";
import WorkProcessSection from "./ServiceOne/WorkProcessSection";

export default function ServicesLayout({ children, pageTitle, breadcrumbs }) {
  return (
    <Layouts pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
      {children && children}
      <WorkProcessSection />
      <PricingSection />
      <GetInTouchSection />
      <BacktoTopCom />
    </Layouts>
  );
}
