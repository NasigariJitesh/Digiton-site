import React from "react";
import GetInTouchSection from "../AboutPages/AboutOne/GetInTouchSection";
import BacktoTopCom from "../helpers/BackToTopCom";
import Layouts from "../helpers/Layouts";
import AboutSection from "../HomeThree/AboutSection";
import WorkProcessSection from "../HomeThree/WorkProcessSection";

export default function TestimonialLayout({
  children,
  pageTitle,
  breadcrumbs,
}) {
  return (
    <Layouts pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
      {children && children}
      <AboutSection className="pb-240" />
      <WorkProcessSection />
      <GetInTouchSection />
      <BacktoTopCom />
    </Layouts>
  );
}
