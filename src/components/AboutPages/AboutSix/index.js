import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import MainSection from "./MainSection";

export default function AboutSix() {
  return (
    <InnerPageDefaultLayout
      pageTitle="About Us Six"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "About Us Six", path: "/about-six" },
      ]}
    >
      <MainSection />
    </InnerPageDefaultLayout>
  );
}
