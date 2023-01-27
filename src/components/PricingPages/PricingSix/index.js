import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import PricingSectionSix from "../PricingSections/PricingSectionSix";

export default function PricingSix() {
  return (
    <InnerPageDefaultLayout
      pageTitle="Pricing Six"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Pricing Six", path: "/pricing-six" },
      ]}
    >
      <PricingSectionSix />
    </InnerPageDefaultLayout>
  );
}
