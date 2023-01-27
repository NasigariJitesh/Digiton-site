import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import WorkProcessSection from "../../HomeThree/WorkProcessSection";
import PricingSectionOne from "../PricingSections/PricingSectionOne";

export default function PricingOne() {
  return (
    <>
      <InnerPageDefaultLayout
        pageTitle="Pricing One"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "page one", path: "/pricing" },
        ]}
      >
        <PricingSectionOne />
        <WorkProcessSection />
      </InnerPageDefaultLayout>
    </>
  );
}
