import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import PricingSectionFour from "../PricingSections/PricingSectionFour";

export default function PricingFour() {
  return (
    <InnerPageDefaultLayout
      pageTitle="Pricing Four"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Pricing Four", path: "/pricing-four" },
      ]}
    >
      <PricingSectionFour />
    </InnerPageDefaultLayout>
  );
}
