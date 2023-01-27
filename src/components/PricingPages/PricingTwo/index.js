import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import WorkProcessSection from "../../HomeThree/WorkProcessSection";
import PricingSectionTwo from "../PricingSections/PricingSectionTwo";

export default function PricingTwo() {
  return (
    <InnerPageDefaultLayout
      pageTitle="Pricing Two"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "page two", path: "/pricing-two" },
      ]}
    >
      <PricingSectionTwo />
      <WorkProcessSection />
    </InnerPageDefaultLayout>
  );
}
