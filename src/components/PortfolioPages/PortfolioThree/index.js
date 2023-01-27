import React from "react";
import Layouts from "../../helpers/Layouts/index";
import MainSection from "./MainSection";

export default function PortfolioThree() {
  return (
    <Layouts
      pageTitle="Portfolio Three"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Portfolio Three", path: "/portfolio-three" },
      ]}
    >
      <MainSection />
    </Layouts>
  );
}
