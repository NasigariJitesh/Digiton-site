import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import PricingSectionFive from "../PricingSections/PricingSectionFive";

export default function PricingFive() {
  return (
    <InnerPageDefaultLayout
      pageTitle="Pricing Five"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Pricing Five", path: "/pricing-five" },
      ]}
    >
      <PricingSectionFive />
    </InnerPageDefaultLayout>
  );
}
