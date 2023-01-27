import React from "react";
import { datas } from "../../../data/PortFolioIsotop.json";
import Layouts from "../../helpers/Layouts/index";
import MainSection from "./MainSection";

export default function PortfolioOne() {
  return (
    <Layouts
      pageTitle="Portfolio"
      breadcrumbs={[
        { name: "home", path: "/" },
        { name: "portfolio", path: "/portfolio" },
      ]}
    >
      <MainSection datas={datas} />
    </Layouts>
  );
}
