import React from "react";
import Layouts from "../../helpers/Layouts";
import MainSection from "./MainSection";

export default function PortfolioFour() {
  return (
    <Layouts
      pageTitle=""
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Portfolio Four", path: "/portfolio-four" },
      ]}
    >
      <MainSection />
    </Layouts>
  );
}
