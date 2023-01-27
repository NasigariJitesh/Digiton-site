import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import WorkProcessSection from "../../HomeThree/WorkProcessSection";
import PricingSectionThree from "../PricingSections/PricingSectionThree";

export default function PricingThree() {
  return (
    <InnerPageDefaultLayout
      pageTitle="Pricing two"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Pricing three", path: "/pricing-three" },
      ]}
    >
      <PricingSectionThree />
      <WorkProcessSection />
    </InnerPageDefaultLayout>
  );
}
