import React from "react";
import GetInTouchSection from "../AboutPages/AboutOne/GetInTouchSection";
import TestimonialSection from "../HomeThree/TestimonialSection";
import BacktoTopCom from "./BackToTopCom";
import Layouts from "./Layouts";

export default function InnerPageDefaultLayout({
  children,
  pageTitle,
  breadcrumbs = [],
}) {
  return (
    <Layouts pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
      {children && children}
      <TestimonialSection />
      <GetInTouchSection />
      <BacktoTopCom />
    </Layouts>
  );
}
